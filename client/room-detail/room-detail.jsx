import React, { useState } from "react";
import RoomDetailSidebar from "./room-detail-sidebar";
import RoomDetailTab from "./room-detail-tab";
import RoomDetailContent from "./room-detail-content";
import RoomDetailModal from "./room-detail-modal";
import RoomDetailBookingContent from "./room-detail-booking-content";
import RoomDetailSteps from "./room-detail-steps";

function RoomDetail({ room }) {
  const [selectedTab, setSelectedTab] = useState("Description");
  const [steps, setSteps] = useState(1);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );
  const [bookingForm, setBookingForm] = useState({
    "first-name": "",
    "last-name": "",
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
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  function ResetForm() {
    setBookingForm({
      "first-name": "",
      "last-name": "",
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
                  steps={steps}
                  setSteps={setSteps}
                  paymentForm={paymentForm}
                  bookingForm={bookingForm}
                  onPaymentBookingFormChange={onPaymentBookingFormChange}
                  onBookingFormChange={onBookingFormChange}
                />
              </div>
              <div className="booking-detail flex">
                <div className="content">
                  <img
                    className="responsive-img"
                    src={room.photos[0]}
                    alt="hotel room"
                  />
                  <div className="room-type-rating">
                    <p>{room.roomtype}</p>
                    <div className="ratings">
                      <i className="fas fa-star fa-star-green"></i>
                      <i className="fas fa-star fa-star-green"></i>
                      <i className="fas fa-star fa-star-green"></i>
                      <i className="fas fa-star fa-star-green"></i>
                      <i className="fas fa-star-half-alt fa-star-green"></i>
                    </div>
                  </div>
                  <hr />
                  <div className="booking-info">
                    <p>Check in: Sat, Apr 23, 2016</p>
                    <p>1 Night(s)</p>
                    <p>Checkout out: Fri, Apr 29, 2016</p>
                    <p>Room for 1 adult and 3 children</p>
                  </div>
                  <div className="booking-totals">
                    <div className="room-total">
                      <span>1 Room x 2 nights</span>
                      <span>$380.69</span>
                    </div>
                    <div className="room-taxes">
                      <span>Taxes</span>
                      <span>$55.05</span>
                    </div>
                    <div className="calculated-prices">
                      <span>Total Price</span>
                      <span>$422.08</span>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
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
