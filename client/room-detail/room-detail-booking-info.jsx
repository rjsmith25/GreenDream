import React from "react";
import { FullDateFormat, getDaysBetween, calculateTotal } from "../component";

function RoomDetailBookingInfo({ room, startDate, endDate, adults, children }) {
  return (
    <div className="booking-detail flex">
      <div className="content">
        <img className="responsive-img" src={room.photos[0]} alt="hotel room" />
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
          <p>Check in: {FullDateFormat(startDate)}</p>
          <p>{getDaysBetween(startDate, endDate)} Night(s)</p>
          <p>Checkout out: {FullDateFormat(endDate)}</p>
          <p>
            Room for {adults} adult and {children} children
          </p>
        </div>
        <div className="booking-totals">
          <div className="room-total">
            <span>1 Room x {getDaysBetween(startDate, endDate)} nights</span>
            <span>
              {"$" +
                calculateTotal(+room.price, getDaysBetween(startDate, endDate))}
            </span>
          </div>
          <div className="calculated-prices">
            <span>Total Price</span>
            <span>
              {"$" +
                calculateTotal(+room.price, getDaysBetween(startDate, endDate))}
            </span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default RoomDetailBookingInfo;
