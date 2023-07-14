import React, { useState } from "react";
import "./addList.css";
import axios from "axios";
const AddList = ({ closeModal, getData }) => {
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();
  const [player3, setPlayer3] = useState();
  const [player4, setPlayer4] = useState();
  const [newList, setNewList] = useState({
    gameType: "",
    gameRating: "",
    players: [],
    waitingTime: "",
  });

  
  const postData = async (newlist) => {
    const BASE_URL = "http://localhost:5000/waiting-list";
    
    try {
       await axios.post(BASE_URL,newlist);
      
    } catch (error) {
      console.log(error)
    }
    getData()
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newList.players = [player1, player2];
    player3 && newList.players.push(player3);
    player4 && newList.players.push(player4);
    if (newList.players.length === 3) return;
    newList.players.length === 4
      ? (newList.gameType = "./img/rackets.svg")
      : (newList.gameType = "./img/racket.svg");
    console.log(newList);
    postData(newList)
    closeModal(false);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h2>New List</h2>
        </div>
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <div className="rating">
              <label htmlFor="Rating">Rating</label>
              <select
                className=""
                name="Rating"
                id="Rating"
                value={newList.gameRating}
                required
                onChange={(e) =>
                  setNewList({ ...newList, gameRating: e.target.value })
                }
              >
                <option value="" disabled>
                  Select Rating
                </option>
                <option value="./img/hand-shake.svg">Friendship</option>
                <option value="2.5">2.5</option>
                <option value="3.5">3.5</option>
                <option value="4.1">4.1</option>
              </select>
            </div>

            <div className="player">
              <label htmlFor="player1">Player1</label>
              <input
                type="text"
                id="player1"
                name="player1"
                placeholder="Enter Name"
                required
                onChange={(e) => setPlayer1(e.target.value)}
                value={player1 || ""}
              />
            </div>

            <div className="player">
              <label htmlFor="player2">Player2</label>
              <input
                type="text"
                id="player2"
                name="player2"
                placeholder="Enter Name"
                required
                onChange={(e) => setPlayer2(e.target.value)}
                value={player2 || ""}
              />
            </div>
            <div className="player">
              <label htmlFor="player3">Player3</label>
              <input
                type="text"
                id="player3"
                name="player3"
                placeholder="Enter Name"
                onChange={(e) => setPlayer3(e.target.value)}
                value={player3 || ""}
              />
            </div>
            <div className="player">
              <label htmlFor="player4">Player4</label>
              <input
                type="text"
                id="player4"
                name="player4"
                placeholder="Enter Name"
                onChange={(e) => setPlayer4(e.target.value)}
                value={player4 || ""}
              />
            </div>

            <div className="time">
              <label htmlFor="time">Waiting Time</label>
              <input
                type="number"
                id="time"
                name="time"
                placeholder="Waiting Time(minutes)"
                required
                value={newList.waitingTime}
                onChange={(e) =>
                  setNewList({ ...newList, waitingTime: e.target.value })
                }
              />
            </div>
            <div className="form-buttons">
              <button
                type="button"
                onClick={() => closeModal(false)}
                className="cancel"
              >
                Cancel
              </button>
              <button type="submit" className="add">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddList;
