import React, { useState, useEffect } from 'react'
import './Navbar.css'
const Navbar = () => {
    const [show, setshow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setshow(true);
            } else {
                setshow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className='navlogo' src="../collection/logo1.png" alt="navlogo" />
            <p className='navavatar'>Sign in</p>
       

        </div>
    )
}

export default Navbar
