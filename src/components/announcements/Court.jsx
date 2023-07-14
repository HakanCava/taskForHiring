import React from "react";
import "./court.css";

const Court = ({ players, waitingTime }) => {
  return (
    <div className="court">
      <div className="rectangle1"></div>
      <div className="rectangle2"></div>
      <div className="vector"></div>
      <div className="rectangle3"></div>
      <div className="top-names">
        <p>
          {players[0] && players[0].includes(" ")
            ? `${players[0].split(" ")[0]} ${players[0].split(" ")[1][0]}.`
            : players[0]}
        </p>
        <p>
          {players[1] && players[1].includes(" ")
            ? `${players[1].split(" ")[0]} ${players[1].split(" ")[1][0]}.`
            : players[1]}
        </p>
        
      </div>
      <div className="rectangle4">{waitingTime} mins.</div>
      <div className="bottom-names">
       
        <p>
          {players[2] && players[2].includes(" ")
            ? `${players[2].split(" ")[0]} ${players[2].split(" ")[1][0]}.`
            : players[2]}
        </p>
        <p>
          {players[3] && players[3].includes(" ")
            ? `${players[3].split(" ")[0]} ${players[3].split(" ")[1][0]}.`
            : players[3]}
        </p>
       
      </div>
    </div>
  );
};

export default Court;
