import React from "react";
import "./court.css";

const Courts = () => {
  return (
    <div className="mobil-court-container">
      <img src="./img/compass.svg" alt="" />
      <div className="sm-courts">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <img src="./img/courts.svg" alt="" key={index}/>
          ))}
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <img src="./img/courts-2.svg" alt="" key={index} />
          ))}
      </div>
    </div>
  );
};

export default Courts;
