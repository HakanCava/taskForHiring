import React, { useState } from "react";
import "./waitingList.css";
import Table from "./Table";

const WaitingList = ({ list, loading, error }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="mobil-waitingList">
      <div className="header">
        <div className="left">
          <p>Waiting List</p>
          <img src="./img/quesLogo.svg" alt="" />
        </div>
        <div className="right">
          <img src="./img/rotateLogo.svg" alt="" />
        </div>
      </div>
      <div className="mobil-tableContainer">
        {error && <div>Something went wrong!</div>}
        {!error && <Table list={list} show={show}/>}
        {loading && <div>Loading...</div>}
        {!show && (
          <>
            <p>Show player names</p>
            <img src="./img/arrow.svg" alt="" onClick={handleClick} />
          </>
        )}
        {show && (
          <>
            <p>Hide player names</p>
            <img
              src="./img/arrow.svg"
              alt=""
              style={{ transform: "rotateX(-180deg)" }}
              onClick={handleClick}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default WaitingList;
