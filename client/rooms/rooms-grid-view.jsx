import React, { useEffect } from "react";
import { formatDate } from "../component";
import RoomRating from "./rooms-rating";
let BASE_URL;

function RoomsGridView({ currentRooms, startDate, endDate, adults, children }) {
  useEffect(() => {
    BASE_URL =
      window.location.protocol +
      "//" +
      window.location.hostname +
      (window.location.port ? ":" + window.location.port : "");
  }, []);
  function goDetailPage(id) {
    return (e) => {
      e.preventDefault();
      const params = new URLSearchParams({
        start_date: formatDate(startDate),
        end_date: formatDate(endDate),
        adults: adults,
        children: children,
      });
      window.location.href = `${BASE_URL}/room/${id}?${params.toString()}`;
    };
  }
  return (
    <div className="grid-view grid">
      {currentRooms.map((room, index) => {
        return (
          <div
            onClick={goDetailPage(room.id)}
            key={index}
            className="room-card"
          >
            <i className="far fa-heart"></i>
            <div className="room-card-pic">
              <img
                className="responsive-img"
                src={room.photos[0]}
                alt="hotel"
              />
            </div>
            <div className="room-card-info">
              <div className="info">
                <h2>{room.roomtype}</h2>
                <div className="ratings-reviews">
                  <RoomRating count={room.rating} />
                  <span className="review-count">{room.rating}</span>
                </div>
              </div>
              <div className="pricing">
                <p>${room.price}</p>
                <p>night</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RoomsGridView;
