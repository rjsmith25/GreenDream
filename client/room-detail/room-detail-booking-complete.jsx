import React from "react";

function RoomDetailBookingComplete({ bookingForm }) {
  return (
    <>
      <h2 className="completed-title">Booking completed!</h2>
      <div className="booking-completed">
        <div className="booking-thank-you">
          <p>Thank you! Your Booking order is now confirmed</p>
          <p>
            A confirmation email has been sent to your provided email address
          </p>
        </div>
        <div className="completed-info">
          <h2 className="traveler-title">Traveler information</h2>
          <div className="content">
            <div className="info info-variant-1 flex">
              <p>Booking number:</p>
              <p>223-456-456</p>
            </div>
            <div className="info flex">
              <p>First name:</p>
              <p>{bookingForm["first_name"]}</p>
            </div>
            <div className="info info-variant-1 flex">
              <p>Last name:</p>
              <p>{bookingForm["last_name"]}</p>
            </div>
            <div className="info flex">
              <p>Email:</p>
              <p>{bookingForm.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomDetailBookingComplete;
