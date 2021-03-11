import React, { useState } from "react";

function RoomDetailPhotos({ photos }) {
  const [selected, setSelected] = useState(0);

  function selectPhotosClick(e) {
    setSelected(+e.target.dataset.tag);
  }

  return (
    <div className="photos">
      <img className="responsive-img" src={photos[selected]} alt=" a room" />
      <div className="img-selections flex">
        {photos.map((image, index) => {
          return (
            <div key={index} className="img-option">
              <img
                onClick={selectPhotosClick}
                data-tag={index}
                className="responsive-img"
                src={image}
                alt="a room"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RoomDetailPhotos;
