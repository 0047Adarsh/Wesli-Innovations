import React from "react";
import ReactDOM from "react-dom";

function Header()
{
    return(<header>
        <div class="header">
            <div class="company">
                <img src="/images/wesli-logo.jpg"/>
                <h1>Wesli Innovations</h1>
            </div>
            <div class="nav-bar">
                <div class="nav"><a href="/">Home</a></div>
                <div class="nav"><a href="services.html">Services</a></div>
                <div class="nav"><a href="contact.html">Contact</a></div>
                <div class="nav"><a href="products" target="_blank">Products</a></div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                <div class="nav"><a href="about.html">About</a></div>
                <div class="nav"><a href="faq.html">FAQ</a></div>
            </div>
        </div>
    </header>);
}

export default Header;