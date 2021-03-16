import React from "react";

function RoomDetailBookingForm({ bookingForm, setSteps, onBookingFormChange }) {
  function nextStepsClick(e) {
    if (!bookingForm["first_name"]) {
      return;
    }

    if (!bookingForm["last_name"]) {
      return;
    }

    if (!bookingForm.email) {
      return;
    }

    e.preventDefault();
    setSteps(2);
  }
  return (
    <>
      <h2 className="booking-title">Your booking details</h2>
      <form className="booking-form-fillout">
        <div className="input-group input-group-1 flex">
          <div className="input-box flex">
            <label htmlFor="first_name">
              First name <span className="required-mark">*</span>
            </label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              placeholder="First Name"
              onChange={onBookingFormChange}
              value={bookingForm["first_name"]}
              required={true}
            />
          </div>
          <div className="input-box flex">
            <label htmlFor="last_name">
              Last name <span className="required-mark">*</span>
            </label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              placeholder="Last Name"
              onChange={onBookingFormChange}
              value={bookingForm["last_name"]}
              required={true}
            />
          </div>
        </div>
        <div className="input-group input-group-2 flex">
          <div className="input-box flex">
            <label htmlFor="email">
              Email <span className="required-mark">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={onBookingFormChange}
              value={bookingForm.email}
              required={true}
            />
          </div>
          <div className="input-box flex">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone Number 000-000-0000"
              onChange={onBookingFormChange}
              value={bookingForm.phone}
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            />
          </div>
        </div>
        <div className="input-group input-group-3 flex">
          <div className="input-box flex">
            <label htmlFor="street">Street</label>
            <input
              name="street"
              id="street"
              type="text"
              placeholder="Street"
              onChange={onBookingFormChange}
              value={bookingForm.street}
            />
          </div>
          <div className="input-box flex">
            <label htmlFor="city">City</label>
            <input
              name="city"
              id="city"
              type="text"
              placeholder="City"
              onChange={onBookingFormChange}
              value={bookingForm.city}
            />
          </div>
          <div className="input-box flex">
            <label htmlFor="zipcode">Zip Code</label>
            <input
              id="zipcode"
              name="zipcode"
              type="text"
              placeholder="Zip Code"
              onChange={onBookingFormChange}
              value={bookingForm.zipcode}
            />
          </div>
        </div>
        <div className="button-container flex">
          <button onClick={nextStepsClick}>Next Step</button>
        </div>
      </form>
    </>
  );
}

export default RoomDetailBookingForm;
