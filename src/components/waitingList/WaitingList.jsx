import React from "react";
import "./waitingList.css";
import Table from "./Table";

const WaitingList = ({ list, loading, error }) => {
  return (
    <div className="waiting-list">
      <div className="header">
        <h2>Waiting List</h2>
      </div>
      <div className="tableContainer">
        {error && <div>Something went wrong!</div>}
        {!error&&<Table list={list}/>}
        {loading&&<div>Loading...</div>}
      </div>
    </div>
  );
};

export default WaitingList;
