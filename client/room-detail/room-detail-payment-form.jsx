import React from "react";

function RoomDetailPaymentForm({
  paymentForm,
  setSteps,
  onPaymentBookingFormChange,
}) {
  function onBackClick(e) {
    e.preventDefault();
    setSteps(1);
  }
  function onNextClick(e) {
    if (!paymentForm["credit-card"]) {
      return;
    }

    if (!paymentForm["expiry-date"]) {
      return;
    }

    if (!paymentForm.cvc) {
      return;
    }

    e.preventDefault();
    setSteps(3);
  }
  return (
    <>
      <h2 className="payment-title">Your Payment Details</h2>
      <form className="booking-payment-form">
        <div className="input-group input-group-1 flex">
          <div className="input-box flex">
            <label htmlFor="credit-card">
              Card Number <span className="required-mark">*</span>
            </label>
            <input
              id="credit-card"
              name="credit-card"
              type="number"
              placeholder="Card Number"
              required={true}
              value={paymentForm["credit-card"]}
              onChange={onPaymentBookingFormChange}
            />
          </div>
        </div>
        <div className="input-group input-group-2 flex">
          <div className="input-box flex">
            <label htmlFor="expiry-date">
              Expiry date <span className="required-mark">*</span>
            </label>
            <input
              id="expiry-date"
              name="expiry-date"
              type="expiry-date"
              placeholder="MM/YY"
              required={true}
              pattern="[0-9]{2}/[0-9]{2}"
              value={paymentForm["expiry-date"]}
              onChange={onPaymentBookingFormChange}
            />
          </div>
          <div className="input-box flex">
            <label htmlFor="cvc">
              CVC/CVV <span className="required-mark">*</span>
            </label>
            <input
              id="cvc"
              name="cvc"
              type="number"
              placeholder="***"
              pattern="[0-9]{3}"
              required={true}
              value={paymentForm.cvc}
              onChange={onPaymentBookingFormChange}
            />
          </div>
        </div>
        <div className="button-container flex">
          <div onClick={onBackClick} className="back-button">
            <i className="fas fa-arrow-left"></i> Back to your booking details
          </div>
          <button onClick={onNextClick}>Pay & Book Now</button>
        </div>
      </form>
    </>
  );
}

export default RoomDetailPaymentForm;
