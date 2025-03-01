import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Nav()
{
    return <div>
        <div class="nav"><a href="/">Home</a></div>
            <div class="nav"><a href="/services">Services</a></div>
            <div class="nav"><a href="/contact">Contact</a></div>
            <div class="nav"><a href="/products" target="_blank">Products</a></div>
            <div class="nav"><a href="about.html"><ShoppingCartIcon/></a></div>
    </div>
}

export default Nav;