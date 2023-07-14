import React from "react";
import "./table.css";

const Table = ({ list }) => {
  return (
    <table className="table">
      <thead className="thead">
        <tr className="thead-tr">
          <th className="th-1">Game Type</th>
          <th className="th-2">Game Rating</th>
          <th className="th-3">Players</th>
          <th className="th-4">Waiting Time</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {list?.map((item) => (
          <tr className="tbody-tr" key={item.id}>
            <td className="td-1">
              <img src={item.gameType} alt="" />
            </td>
            <td className="td-2">{item.gameRating.includes("./img/")?<img src={item.gameRating} alt="" />:item.gameRating}</td>
            <td className="td-3">
              <div className="playersContainer">
                <div className="players">
                  <p>{item.players[0]}</p> <p>{item.players[1]}</p>
                </div>
                <div className="players">
                  <p>{item.players[2]}</p> <p>{item.players[3]}</p>
                </div>
              </div>
            </td>
            <td className="td-4">{item.waitingTime} mins</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
