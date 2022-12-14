import React from "react";
import "./Main.scss";
import Left from "../Left/Left";
import Right from "../Right/Right";

const Main = ({ data, setData }) => {
  return (
    <>
      <div className="main">
        <div className="container-fluid">
          <div className="main__hero">
            <div className="main__left">
              <Left data={data} setData={setData} />
            </div>
            <div className="main__right">
              <Right data={data} setData={setData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
