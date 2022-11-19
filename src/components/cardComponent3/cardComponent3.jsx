import React from "react";

export const CardComponent3 = ({ img, ttl, dct }) => {
  return (
    <li class="list-item-container">
      <img class="list-image" src={img} alt="" srcset="" />
      <div class="content">
        <h2>{ttl}</h2>
        <p>{dct}</p>
      </div>
    </li>
  );
};
