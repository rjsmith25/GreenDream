import React, { useState } from "react";

function RoomDetailPhotos() {
  const [photos, setPhotos] = useState([
    "https://greendreams.s3.amazonaws.com/3508cc4ab514624e8c492bff8dcf51a3688ec033cf5831ef8dda458f60086a77%26o%3D",
    "https://greendreams.s3.amazonaws.com/46fb3219dacbb60b63a995cc40c8cd4448be09895aa6f0ab0a9c49214d9a2293%26o%3D",
    "https://greendreams.s3.amazonaws.com/b52fc9461d39f7f576edd7156820a2418fa94a8593796b65e286ea5ae09c57b5%26o%3D",
    "https://greendreams.s3.amazonaws.com/1a840cd618c9700b83c32d96c140b55433ce17609b63a9075233856879889ac7%26o%3D",
  ]);
  const [selected, setSelected] = useState(0);

  function selectPhotosClick(e) {
    setSelected(+e.target.dataset.tag);
  }

  return (
    <div className="photos">
      <div className="main-photo">
        <img className="responsive-img" src={photos[selected]} alt=" a room" />
      </div>
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
