// // src/components/Navbar.js
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../contexts/CartContext';
// import './Navbar.css'; // For styling

// const Navbar = () => {
//   const { cart } = useContext(CartContext);

//   return (
//     <nav className="navbar">
//       <h1 className="logo">eCommerce</h1>
      
//       <input className="search-bar" type="text" placeholder="Search products..." />

//       <div className="nav-items">
//         <Link to="/cart" className="cart-icon">
//           🛒
//           <span className="cart-count">{cart.length}</span>
//         </Link>
        
//         <button className="login-btn">Login</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
