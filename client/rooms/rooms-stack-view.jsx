import React from "react";

function getDaysBetween(firstDate, secondDate) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  // const firstDate = new Date();
  // const secondDate = new Date(new Date().setDate(new Date().getDate() + 1));

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  return diffDays;
}

function RoomsStackView({ currentRooms, totalNights }) {
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
              <button>Choose</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RoomsStackView;
