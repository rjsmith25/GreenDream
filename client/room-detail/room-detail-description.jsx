import React from "react";

function RoomDetailDescription({ room }) {
  return (
    <>
      <h2>About</h2>
      <div className="room-info flex">
        <p>
          <span>bed:</span> {room.beds}
        </p>
        <p>
          <span>Location:</span> 1st to 5th floor
        </p>
        <p>
          <span>Max:</span> 4 People
        </p>
        <p>
          <span>Room Size:</span> 200 ft<sup>2</sup>
        </p>
      </div>
      <div className="room-description">
        <p>
          ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur
          quo incidunt sed et iste, tenetur odit rem esse magni nemo libero
          excepturi beatae perspiciatis, sunt eligendi autem minus delectus,
          molestiae ea porro. Maiores voluptatum, totam qui, laboriosam officia
          odit ea velit distinctio tenetur minus voluptates dignissimos quia
          numquam vitae dolore magnam a nostrum quod, esse. Nostrum suscipit eos
          nulla, asperiores fuga, amet nisi nesciunt, magnam optio voluptatum
          ab. Voluptatibus.
        </p>
      </div>
      <h2>Amenities </h2>
      <div className="Amenities">
        <ul className="flex">
          {room.amenities.map((amenity, index) => {
            return <li key={index}>{amenity}</li>;
          })}
        </ul>
      </div>
      <h2>Facilities</h2>
      <div className="Facilities">
        <ul className="flex">
          {room.facilities.map((facility, index) => {
            return <li key={index}>{facility}</li>;
          })}
        </ul>
      </div>
      <h2>Langauges Spoken</h2>
      <div className="langauges">
        <ul className="flex">
          <li>Portuguese</li>
          <li>Russian</li>
          <li>English</li>
          <li>Romanian</li>
          <li>French</li>
          <li>Spanish</li>
          <li>Italian</li>
        </ul>
      </div>
    </>
  );
}

export default RoomDetailDescription;
