import React from "react";
import RoomDetailBookingForm from "./room-detail-booking-form";
import RoomDetailPaymentForm from "./room-detail-payment-form";
import RoomDetailBookingComplete from "./room-detail-booking-complete";

function RoomDetailBookingContent({
  steps,
  setSteps,
  paymentForm,
  bookingForm,
  onPaymentBookingFormChange,
  onBookingFormChange,
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
          paymentForm={paymentForm}
          setSteps={setSteps}
          onPaymentBookingFormChange={onPaymentBookingFormChange}
        />
      );
    case 3:
      return <RoomDetailBookingComplete />;
    default:
      return null;
  }
}

export default RoomDetailBookingContent;
