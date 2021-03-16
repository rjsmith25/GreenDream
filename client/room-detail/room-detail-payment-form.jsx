import React, { useState } from "react";
import axios from "axios";
import RoomDetailLoading from "./room-detail-loading";
import { getDaysBetween, calculateTotal, formatDate } from "../component";

function getToken(cardNum, cvc, expiry) {
  return new Promise((resolve, reject) => {
    Stripe.card.createToken(
      {
        number: cardNum,
        cvc: cvc,
        exp_month: expiry[0],
        exp_year: expiry[1],
      },
      (status, response) => {
        if (response.error) {
          reject(response.error);
        }
        resolve(response);
      }
    );
  });
}

function RoomDetailPaymentForm({
  bookingForm,
  paymentForm,
  room,
  startDate,
  endDate,
  setSteps,
  onPaymentBookingFormChange,
}) {
  const [disablePayment, setDisablePayment] = useState(false);
  const [processing, setProcessing] = useState(false);
  function onBackClick(e) {
    e.preventDefault();
    setSteps(1);
  }

  async function onNextClick(e) {
    e.preventDefault();
    if (!paymentForm["credit-card"]) {
      return;
    }

    if (paymentForm["credit-card"] != "4242424242424242") {
      return;
    }
    if (!paymentForm["expiry-date"]) {
      return;
    }

    if (!paymentForm.cvc) {
      return;
    }

    let expiry = paymentForm["expiry-date"].split("/");

    try {
      setDisablePayment(true);
      setProcessing(true);
      let [customerRes, stripeToken] = await Promise.all([
        axios.post("/api/customers", bookingForm),
        getToken(paymentForm["credit-card"], paymentForm.cvc, expiry),
      ]);

      let bookingRes = await axios.post("/api/booking", {
        customer_id: customerRes.data.id,
        room_id: room.id,
        start_date: formatDate(startDate),
        end_date: formatDate(endDate),
      });

      let paymentRes = await axios.post("/api/payments", {
        booking_id: bookingRes.data.id,
        price: calculateTotal(+room.price, getDaysBetween(startDate, endDate)),
        token: stripeToken.id,
      });

      console.log(paymentRes.data);
      console.log(customerRes.data);
      console.log(bookingRes.data);
      setProcessing(false);
      setSteps(3);
    } catch (e) {
      setProcessing(false);
      setDisablePayment(false);
      if (e.response) {
        console.log(e.response.data);
        console.log(e.response.status);
      }
    }
  }
  return (
    <>
      <h2 className="payment-title">Your Payment Details</h2>
      {processing ? (
        <RoomDetailLoading />
      ) : (
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
            <button disabled={disablePayment} onClick={onNextClick}>
              Pay & Book Now
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default RoomDetailPaymentForm;
