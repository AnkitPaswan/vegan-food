import React from 'react'
import { useEffect, useState } from "react";

import './Header.css'
import { useNavigate } from 'react-router-dom';
const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();


    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <h1>Admin </h1>
                    </ul>
                    <div className="center">
                        <li onClick={() => navigate('/')}>Dashboard</li>
                        <li onClick={() => navigate('/productList')}>Products</li>
                        <li onClick={() => navigate('/orders')}>Orders</li>
                        <li onClick={() => navigate('/customerList')}>Customers</li>
                        <li><button onClick={() => navigate('/addProduct')}>Create Product</button></li>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header