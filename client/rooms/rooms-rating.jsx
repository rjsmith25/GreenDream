import React from "react";
import { nanoid } from "nanoid";

function RoomRating({ count }) {
  let contents = [];
  let len = Math.floor(count);
  for (let i = 0; i < len; i++) {
    if (i === len - 1) {
      contents.push(
        <i key={nanoid()} className="fas fa-star-half-alt fa-star-green"></i>
      );
    } else {
      contents.push(
        <i key={nanoid()} className="fas fa-star fa-star-green"></i>
      );
    }
  }

  for (let i = len; i < 5; i++) {
    contents.push(
      <i
        key={nanoid()}
        style={{ color: "#1caf4d" }}
        className="far fa-star"
      ></i>
    );
  }
  return <>{contents}</>;
}

export default RoomRating;
