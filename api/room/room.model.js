const db = require("../../data/dbConfig");

async function find() {
  try {
    let [
      rooms,
      roomsAmenities,
      roomsPhotos,
      roomsFacilities,
    ] = await Promise.all([
      db("rooms"),
      db("rooms")
        .select("room_id", "amenity")
        .join("amenities", "rooms.id", "=", "amenities.room_id"),
      db("rooms")
        .select("room_id", "image_url")
        .join("photos", "rooms.id", "=", "photos.room_id"),
      db("rooms")
        .select("room_id", "facility")
        .join("facilities", "rooms.id", "=", "facilities.room_id"),
    ]);

    for (let i = 0; i < rooms.length; i++) {
      let amenities = [];
      let photos = [];
      let facilities = [];

      // link amenities to room
      for (let j = 0; j < roomsAmenities.length; j++) {
        if (rooms[i].id === roomsAmenities[j].room_id) {
          amenities.push(roomsAmenities[j].amenity);
        }
      }

      // link photos to room
      for (let k = 0; k < roomsPhotos.length; k++) {
        if (rooms[i].id === roomsPhotos[k].room_id) {
          photos.push(roomsPhotos[k].image_url);
        }
      }

      // link facilities to room
      for (let l = 0; l < roomsFacilities.length; l++) {
        if (rooms[i].id === roomsFacilities[l].room_id) {
          facilities.push(roomsFacilities[l].facility);
        }
      }

      rooms[i].photos = photos;
      rooms[i].amenities = amenities;
      rooms[i].facilities = facilities;
    }

    return rooms;
  } catch (e) {
    return e;
  }
}

async function findById(id) {
  try {
    let [room, amenities, photos, facilities] = await Promise.all([
      db("rooms").where({ id: id }).first(),
      db("rooms")
        .select("amenity")
        .join("amenities", "rooms.id", "=", "amenities.room_id")
        .where("room_id", id),
      db("rooms")
        .select("image_url")
        .join("photos", "rooms.id", "=", "photos.room_id")
        .where("room_id", id),
      db("rooms")
        .select("facility")
        .join("facilities", "rooms.id", "=", "facilities.room_id")
        .where("room_id", id),
    ]);
    amenities = amenities.map((data) => {
      return data.amenity;
    });

    photos = photos.map((data) => {
      return data.image_url;
    });

    facilities = facilities.map((data) => {
      return data.facility;
    });

    room.photos = photos;
    room.amenities = amenities;
    room.facilities = facilities;

    return room;
  } catch (e) {
    return e;
  }
}

module.exports = { find, findById };
