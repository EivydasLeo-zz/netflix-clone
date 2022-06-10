import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

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
                        <Link className="nav__link" to="/home">Home</Link>
                    </li>
                    <li className="nav__list">
                        <Link className="nav__link" to="/tv-shows">TV Shows</Link>
                    </li>
                    <li className="nav__list">
                        <Link className="nav__link" to="/movies">Movies</Link>
                    </li>
                    <li className="nav__list">
                        <Link className="nav__link" to="/new-popular">New & Popular</Link>
                    </li>
                    <li className="nav__list">
                        <Link className="nav__link" to="/my-list">My List</Link>
                    </li>
                </ul>
            </div>

            <div className="nav__item nav__item--secondary">
                <div>Search Icon</div>
                <Link className="nav__link" to="kids">
                    <div>Kids</div>
                </Link>
                <div>Notification</div>
                <Link to="/">
                    <img className="nav__avatar"
                         src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                         alt="Avatar logo"/>
                    <span>Arrow</span>
                </Link>
            </div>

        </div>
    );
};

export default Nav;
