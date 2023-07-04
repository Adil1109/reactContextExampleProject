import React from "react";

export default Movie = ({ name, price }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{price}</h2>
    </div>
  );
};
