import React from "react";
import RoomDetailBookingForm from "./room-detail-booking-form";
import RoomDetailPaymentForm from "./room-detail-payment-form";
import RoomDetailBookingComplete from "./room-detail-booking-complete";

function RoomDetailBookingContent({
  steps,
  setSteps,
  room,
  paymentForm,
  bookingForm,
  onPaymentBookingFormChange,
  onBookingFormChange,
  startDate,
  endDate,
  bookingid,
  setBookingID,
}) {
  switch (steps) {
    case 1:
      return (
        <RoomDetailBookingForm
          bookingForm={bookingForm}
          setSteps={setSteps}
          onBookingFormChange={onBookingFormChange}
        />
      );
    case 2:
      return (
        <RoomDetailPaymentForm
          startDate={startDate}
          endDate={endDate}
          setBookingID={setBookingID}
          room={room}
          paymentForm={paymentForm}
          bookingForm={bookingForm}
          setSteps={setSteps}
          onPaymentBookingFormChange={onPaymentBookingFormChange}
        />
      );
    case 3:
      return (
        <RoomDetailBookingComplete
          bookingid={bookingid}
          bookingForm={bookingForm}
        />
      );
    default:
      return null;
  }
}

export default RoomDetailBookingContent;
