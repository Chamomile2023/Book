import React from "react";
import './Right.scss'
import book from '../assets/book.png'

const Right = () => {
    return (
        <>
            <div className="right">
                <div className="container-fluid">
                    <div className="right__hero">
                        <div className="right__cards">
                            <div className="right__card">
                                <img src={book} alt="book" className="right__card--book" />
                                <div className="right__card--text">
                                    <h4 className="right__card--title">PHP</h4>
                                    <p className="right__card--name">David M. Beazley</p>
                                    <p className="right__card--name">2002</p>
                                </div>
                                <div className="right__buttons">
                                    <button className="right__buttons--one">Bookmark</button>
                                    <button className="right__buttons--two">More Info</button>
                                    <button className="right__buttons--three">Read</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Right;
