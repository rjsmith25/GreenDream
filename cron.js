const db = require("./data/dbConfig");
const cron = require("node-cron");

function formatDate(date_object) {
  let date = date_object.getDate();
  let year = date_object.getFullYear();
  let month = date_object.getMonth() + 1;

  return `${month}-${date}-${year}`;
}

function bookingDates(date) {
  return db("booking").where("end_date", "<=", date);
}

function deleteBookings(list) {
  return db("booking").whereIn("id", list).del();
}

function updateRooms(list, updates) {
  return db("rooms").whereIn("id", list).update(updates);
}

cron.schedule("0 0 11 * * *", async () => {
  try {
    let d = new Date();
    d = formatDate(d);
    let bookings = await bookingDates(d);
    let bookingListIDs = bookings.map((booking) => {
      return booking.id;
    });
    let BookingRoomIDs = bookings.map((booking) => {
      return booking.room_id;
    });
    await deleteBookings(bookingListIDs);
    await updateRooms(BookingRoomIDs, { status: "Open" });
    console.log("done");
  } catch (e) {
    console.log(e);
  }
});
