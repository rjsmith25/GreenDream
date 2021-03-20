import React, { useState, useEffect } from "react";
import RoomDetailSidebar from "./room-detail-sidebar";
import RoomDetailTab from "./room-detail-tab";
import RoomDetailContent from "./room-detail-content";
import RoomDetailModal from "./room-detail-modal";
import RoomDetailBookingContent from "./room-detail-booking-content";
import RoomDetailSteps from "./room-detail-steps";
import RoomDetailBookingInfo from "./room-detail-booking-info";

function RoomDetail(props) {
  const [room, setRoom] = useState(props.room || {});
  const [selectedTab, setSelectedTab] = useState("Description");
  const [steps, setSteps] = useState(1);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [startDate, setStartDate] = useState(() => {
    return props.startDate
      ? new Date(props.startDate.replace(/-/g, "/"))
      : new Date();
  });
  const [endDate, setEndDate] = useState(() => {
    return props.endDate
      ? new Date(props.endDate.replace(/-/g, "/"))
      : new Date(new Date().setDate(new Date().getDate() + 1));
  });
  const [bookingForm, setBookingForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zipcode: "",
  });
  const [paymentForm, setPaymentForm] = useState({
    "credit-card": "",
    "expiry-date": "",
    cvc: "",
  });
  const [adults, setAdults] = useState(+props.adults || 2);
  const [children, setChildren] = useState(+props.children || 0);
  const [bookingid, setBookingID] = useState(null);

  useEffect(() => {
    Stripe.setPublishableKey(
      "pk_test_51IVfkxDJXRSte3d6NIfYevhg4l13WWIOHW5Vh2A3MGym35PvpuXn1ktv99aqpenMvQaSYiTf4E7orGaBL3olxBUx000cYuVDAE"
    );
  }, []);

  function ResetForm() {
    setBookingForm({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      zipcode: "",
    });

    setPaymentForm({
      "credit-card": "",
      "expiry-date": "",
      cvc: "",
    });

    setSteps(1);
  }

  function onBookingFormChange(e) {
    setBookingForm({ ...bookingForm, [e.target.name]: e.target.value });
  }

  function onPaymentBookingFormChange(e) {
    if (e.target.name === "cvc" && e.target.value.length > 3) {
      return;
    }

    if (e.target.name === "expiry-date" && e.target.value.length > 5) {
      return;
    }

    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });
  }

  function CloseDetailModal() {
    setShowDetailModal(false);
    ResetForm();
  }

  function OpenDetailModal(e) {
    e.preventDefault();
    setShowDetailModal(true);
  }

  return (
    <>
      {showDetailModal && (
        <RoomDetailModal>
          <div className="container">
            <div className="room-detail-booking flex">
              <i onClick={CloseDetailModal} className="fas fa-times-circle"></i>
              <div className="booking-form">
                <RoomDetailSteps steps={steps} />
                <div className="steps-names flex">
                  <p>Your booking details</p>
                  <p>Your payment details</p>
                  <p>Booking Completed!</p>
                </div>
                <RoomDetailBookingContent
                  room={room}
                  steps={steps}
                  setSteps={setSteps}
                  paymentForm={paymentForm}
                  bookingForm={bookingForm}
                  startDate={startDate}
                  endDate={endDate}
                  room={room}
                  setRoom={setRoom}
                  bookingid={bookingid}
                  setBookingID={setBookingID}
                  onPaymentBookingFormChange={onPaymentBookingFormChange}
                  onBookingFormChange={onBookingFormChange}
                />
              </div>
              <RoomDetailBookingInfo
                room={room}
                adults={adults}
                children={children}
                startDate={startDate}
                endDate={endDate}
              />
            </div>
          </div>
        </RoomDetailModal>
      )}
      <div className="container grid">
        <div className="room-detail-content">
          <RoomDetailTab
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <div className="content">
            <RoomDetailContent selectedTab={selectedTab} room={room} />
          </div>
        </div>
        <RoomDetailSidebar
          adults={adults}
          setAdults={setAdults}
          children={children}
          setChildren={setChildren}
          OpenDetailModal={OpenDetailModal}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </div>
    </>
  );
}

export default RoomDetail;
