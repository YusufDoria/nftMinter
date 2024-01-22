import React from 'react';
import logo from "./MintIt_logo.png";
import { Link } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";


function Navbar() {
    return (
        <nav className="navbar">
            <Link to={'/'}>
                <img src={logo} alt="MintIt" className="logo" />
            </Link>
            <ul>
                <li>Feed</li>
                <li>Create</li>
                <li>About</li>
            </ul>
            <ConnectWallet/>
        </nav>
    );
}

export default Navbar;
