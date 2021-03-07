import React from "react";

function RoomsStackView({ currentRooms }) {
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
              <button>Choose</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RoomsStackView;
