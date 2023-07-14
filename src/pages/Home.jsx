import React, { useEffect, useState } from "react";
import Announcements from "../components/announcements/Announcements";
import WaitingList from "../components/waitingList/WaitingList";
import "../styles/home.css";
import MobileSection from "../components/mobile/MobileSection";
import axios from "axios";

const Home = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const BASE_URL = "http://localhost:5000/waiting-list";

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(BASE_URL);
      setList(data);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home">
      <div className="mobile">
        <MobileSection list={list} loading={loading} error={error}/>
      </div>

      <div className="tablet-desktop">
        <WaitingList list={list} loading={loading} error={error} />
        <Announcements list={list} loading={loading} error={error} getData={getData}  />
      </div>
    </div>
  );
};

export default Home;
