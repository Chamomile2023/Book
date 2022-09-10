import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import Logo from "../assets/main_logo.svg";
import Search from "../assets/search.svg";
import Mode from "../assets/mode.svg";

const Header = ({ search, setSearch, searchBook }) => {
    const [darkmode, setDarkMode] = useState(false);

    return (
        <>
            <header className={`header ${darkmode ? "#fff" : "dark"}`}>
                <div className="container-fluid">
                    <div className="header__hero">
                        <div className="header__logo">
                            <NavLink to="/">
                                <img src={Logo} alt="logo" className="header__logo--logo" />
                            </NavLink>
                        </div>
                        <div className="header__input">
                            <img
                                src={Search}
                                alt="search"
                                className="header__input--search"
                            />
                            <input
                                type="text"
                                className="header__input--input"
                                placeholder="Search books"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                                onKeyPress={searchBook}
                            />
                        </div>
                        <div className="header__button">
                            <img src={Mode} alt="mode" className="header__button--mode" />
                            <button className="header__button--btn">Logout</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
