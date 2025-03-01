import React from "react";
import './styles/Card.css'

function Card({ product}) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
}

export default Card;
