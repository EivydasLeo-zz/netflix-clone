import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {FaSearch} from "@react-icons/all-files/fa/FaSearch";
import {IoNotifications} from "@react-icons/all-files/io5/IoNotifications";
import {IoMdArrowDropdown} from "@react-icons/all-files/io/IoMdArrowDropdown";



const Nav = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else setShow(false);
        });
        return () => {
            window.removeEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    setShow(true);
                } else setShow(false);
            })
        }
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>


            <div className="nav__item">
                <ul className="nav__unordered-list">
                    <li className="nav__list">
                        <Link className="nav__link" to='/'>
                            <img className="nav__logo"
                                 src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                                 alt="Netflix logo"/>
                        </Link>
                    </li>
                    <li className="nav__list">
                        <NavLink className="nav__link" to="/home" activeClassName="selected">Home</NavLink>
                    </li>
                    <li className="nav__list">
                        <NavLink className="nav__link" to="/tv-shows" activeClassName="selected">TV Shows</NavLink>
                    </li>
                    <li className="nav__list">
                        <NavLink className="nav__link" to="/movies" activeClassName="selected">Movies</NavLink>
                    </li>
                    <li className="nav__list">
                        <NavLink className="nav__link" to="/new-popular" activeClassName="selected">New & Popular</NavLink>
                    </li>
                    <li className="nav__list">
                        <NavLink className="nav__link" to="/my-list" activeClassName="selected">My List</NavLink>
                    </li>
                </ul>
            </div>

            <div className="nav__item nav__item--secondary">
                <div className="searchBox">
                    <FaSearch color="white" fontSize="22px" cursor="pointer"/>
                </div>
                <Link className="nav__link" to="kids">
                    <div>Kids</div>
                </Link>
                <IoNotifications color="white" fontSize="25px" cursor="pointer"/>
                <Link to="/">
                    <img className="nav__avatar"
                         src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                         alt="Avatar logo"/>
                   <IoMdArrowDropdown color="white" fontSize="23px"/>
                </Link>
            </div>

        </div>
    );
};

export default Nav;
