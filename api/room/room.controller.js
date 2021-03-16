const Room = require("./room.model");

async function getAllRooms(req, res) {
  try {
    let rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (e) {
    res.status(500).json({ message: "Unable to get rooms" });
  }
}

async function getRoomByID(req, res) {
  const { room_id } = req.params;
  try {
    if (!room_id) {
      res.status(400).json({ message: "Missing room id" });
    }

    let room = await Room.findById(room_id);

    if (!room) {
      res.status(404).json({ message: "Unable to find room" });
    }

    res.status(200).json(room);
  } catch (e) {
    res.status(500).json({ message: "Unable to get room" });
  }
}

module.exports = { getAllRooms, getRoomByID };
