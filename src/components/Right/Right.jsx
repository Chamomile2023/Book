import React from "react";
import "./Right.scss";
import { useState, useEffect } from "react";
import book from "../assets/book.png";

const Right = ({ data, setData }) => {
  const [bookmark, setBookmark] = useState([]);

  const addElement = () => {
    const bookmark = {
      id: data.id,
    };
    setData([...data, bookmark]);
  };
  return (
    <>
      <div className="right">
        <div className="container-fluid">
          <div className="right__hero">
            <div className="right__cards">
              {data.map((item, index) => {
                let thumbnail =
                  item.volumeInfo.imageLinks &&
                  item.volumeInfo.imageLinks.thumbnail;
                if (thumbnail != undefined) {
                  return (
                    <div className="right__card" key={index}>
                      <img
                        src={thumbnail}
                        alt="book"
                        className="right__card--book"
                      />
                      <div className="right__card--text">
                        <h4 className="right__card--title">
                          {item.volumeInfo?.title}
                        </h4>
                        <p className="right__card--name">
                          {item.volumeInfo?.authors}
                        </p>
                        <p className="right__card--name">
                          {item.volumeInfo?.publishedDate}
                        </p>
                      </div>
                      <div className="right__buttons">
                        <button
                          className="right__buttons--one"
                          onClick={() => {
                            addElement();
                          }}
                        >
                          Bookmark
                        </button>
                        <button className="right__buttons--two">
                          More Info
                        </button>
                        <button className="right__buttons--three">
                          <a href={item.volumeInfo?.previewLink}>Read</a>
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;
