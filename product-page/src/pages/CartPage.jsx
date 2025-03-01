import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>No items in cart</p> : (
        cart.map((product, index) => (
          <div key={index}>
            <h2>{product.title}</h2>
            <p>{product.price} USD</p>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
