import React, {useEffect, useState} from 'react';

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
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix logo"/>
            <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar logo"/>
        </div>

    );
};

export default Nav;
