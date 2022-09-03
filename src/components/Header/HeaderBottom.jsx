import React from "react";
import "./HeaderBottom.scss";
import calendar from '../assets/calendar.svg'

const HeaderBottom = () => {
  return (
    <>
      <div className="bottom">
        <div className="container-fluid">
          <div className="bottom__middle">
            <div className="bottom__hero">
              <div className="bottom__number">
                <span className="bottom__number--span">Showing <span className="bottom__number--one">18</span> Result <span className="bottom__number--two">788</span></span>
              </div>
              <div className="bottom__calendar">
                <img src={calendar} alt="calendar" className="bottom__calendar--img" />
                <button className="bottom__calendar--btn">Order by newest</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBottom;
