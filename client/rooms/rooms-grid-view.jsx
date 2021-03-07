import React from "react";

function RoomsGridView({ currentRooms }) {
  return (
    <div className="grid-view grid">
      {currentRooms.map((room, index) => {
        return (
          <div key={index} className="room-card">
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
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span className="review-count">
                    {room.reviewCount} Reviews
                  </span>
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
