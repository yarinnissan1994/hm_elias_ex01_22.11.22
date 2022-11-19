import React from "react";

export const CardComponent2 = ({ img, ttl, dct }) => {
  return (
    <li class="list-item-container">
      <img class="list-image" src={img} alt="" />
      <div class="content">
        <h2>{ttl}</h2>
        <p>{dct}</p>
      </div>
    </li>
  );
};
