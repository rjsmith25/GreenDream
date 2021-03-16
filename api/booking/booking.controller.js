const { insert, findBy } = require("./booking.model");
const { nanoid } = require("nanoid");

async function createBooking(req, res) {
  const { start_date, end_date, room_id, customer_id } = req.body;
  if (!start_date || !end_date || !room_id || !customer_id) {
    return res.status(400).json({
      message: "start date, end date, room id, and customer id is required",
    });
  }
  let booking_id = nanoid();

  try {
    let booking = await insert({ ...req.body, booking_id });
    res.status(201).json(booking);
  } catch (e) {
    res.status(500).json({ message: "Unable to book room" });
  }
}

module.exports = { createBooking };
