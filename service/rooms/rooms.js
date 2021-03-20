const axios = require("axios");

async function getAllRooms(url) {
  try {
    let res = await axios.get(`${url}/api/rooms`);
    let rooms = res.data;
    if (!rooms || rooms.length === 0) {
      return Promise.reject("No rooms available");
    }
    return rooms;
  } catch (e) {
    return "Unable to get rooms";
  }
}

async function getRoom(id, url) {
  try {
    let res = await axios.get(`${url}/api/rooms/${id}`);
    let room = res.data;

    if (!room) {
      return Promise.reject("no room available");
    }

    return room;
  } catch (e) {
    return "unable to get room";
  }
}

module.exports = {
  getAllRooms,
  getRoom,
};
