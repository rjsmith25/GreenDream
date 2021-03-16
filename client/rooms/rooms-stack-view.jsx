import React, { useEffect } from "react";
import { formatDate } from "../component";
let BASE_URL;

function RoomsStackView({
  currentRooms,
  totalNights,
  adults,
  children,
  startDate,
  endDate,
}) {
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
    <div className="stack-view">
      {currentRooms.map((room, index) => {
        return (
          <div key={index} className="room">
            <i className="far fa-heart"></i>
            <div className="room-pic">
              <img
                className="responsive-img"
                src={room.photos[0]}
                alt="a hotel room"
              />
            </div>
            <div className="room-info">
              <h2>{room.roomtype}</h2>
              <div className="ratings">
                <i className="fas fa-star fa-star-green"></i>
                <i className="fas fa-star fa-star-green"></i>
                <i className="fas fa-star fa-star-green"></i>
                <i className="fas fa-star fa-star-green"></i>
                <i className="fas fa-star-half-alt fa-star-green"></i>
                <span className="review-count">{room.reviewCount} Reviews</span>
              </div>
              <div className="bed">
                <p>
                  <span>Bed</span>: {room.beds}
                </p>
                <p>
                  <span>Max</span>: 4 People
                </p>
              </div>
            </div>
            <div className="room-pricing">
              <p className="price">
                <span className="price-font">${room.price}</span>/night
              </p>
              {totalNights > 1 && (
                <p className="total-night-price">
                  {+room.price * totalNights} total
                </p>
              )}
              <button onClick={goDetailPage(room.id)}>Choose</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RoomsStackView;
