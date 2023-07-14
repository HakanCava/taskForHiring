import { useState } from "react";
import Court from "./Court";
import "./announcements.css";
import AddList from "./modal/AddList";

const Announcements = ({ list,getData }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="announcements">
      <div className="container">
        <div className="compass">
          <img src="./img/compass.svg" alt="compass" />
        </div>
        <div className="wrapper">
          <div className="topInfo">
            <h2 className="">Announcements</h2>
            <article>
              <div className="header">
                <h2>Court opening hours will change!</h2>
              </div>
              <div className="date">
                <p>11.Dec.22</p>
                <p>11.20 pm</p>
              </div>
              <div className="announc-par">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur hendrerit malesuada purus, in rhoncus risus bibendum
                  eu. Proin tincidunt ut quam in varius. Phasellus lorem ligula,
                  porta ac risus at, volutpat fringilla felis. Integer lectus
                  justo, porttitor eu nulla a, egestas blandit metus.
                </p>
              </div>
            </article>
          </div>
          <div className="courts">
            <h2>Courts</h2>
            <div className="lg-courts">
              {list.map((item) => (
                <Court key={item.id} {...item} />
              ))}
            </div>
          </div>
          <div className="button">
            <button data-test="add-list-btn" onClick={() => setOpenModal(true)}>
              Add to the waiting list
            </button>
            {openModal && <AddList closeModal={setOpenModal} getData={getData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
