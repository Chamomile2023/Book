import React from "react";
import "./Header.scss";
import { NavLink } from 'react-router-dom'
import Logo from '../assets/main_logo.svg'
import Search from '../assets/search.svg'
import Mode from '../assets/mode.svg'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <div className="header__hero">
                        <div className="header__logo">
                            <NavLink to="/">
                                <img src={Logo} alt="logo" className="header__logo--logo" />
                            </NavLink>
                        </div>
                        <div className="header__input">
                            <img src={Search} alt="search" className="header__input--search" />
                            <input type="text" className="header__input--input" placeholder="Search books" />
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
