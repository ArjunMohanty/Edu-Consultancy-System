import React from 'react';
import './Card.css'; {/*Separate CSS for Card styling*/}

const Card = ({ image, title, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">{ price }</p>
        <button className="card-button" onClick={()=>alert("Product Payment form")}>Pay Now</button>
      </div>
    </div>
  );
};

export default Card;
