import React from "react";
import "./Left.scss";
import read from "../assets/book-open.svg";
import deleteIcon from "../assets/delete.svg";

const Left = ({ data, setData }) => {
  const deleteItem = (item) => {
    const filterItem = data.filter((el) => {
      return el.id != item
    })
    setData(filterItem)
  }

  return (
    <>
      <div className="left">
        <div className="container-fluid">
          <div className="left__hero">
            <div className="left__container">
              <h2 className="left__container--title">Bookmarks</h2>
              <p className="left__container--paragraph">
                If you don’t like to read, you haven’t found the right book
              </p>
              <div className="left__cards">
                {data.map((element) => {
                  return (
                    <div className="left__card">
                      <div className="left__text">
                        <h3 className="left__text--title">{element.volumeInfo.title}</h3>
                        <p className="left__text--paragraph">
                          {element.volumeInfo.authors}
                        </p>
                      </div>
                      <div className="left__icons">
                        <a href={element.volumeInfo?.previewLink}> <img src={read} alt="" className="left__icons--read" /></a>
                        <img
                          src={deleteIcon}
                          alt=""
                          className="left__icons--delete"
                          onClick={() => { deleteItem(element.id) }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
