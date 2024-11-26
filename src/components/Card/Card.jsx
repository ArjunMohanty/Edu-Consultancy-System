<<<<<<< HEAD
import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, description, price }) => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    const course = { image, title, description, price }; // Construct the course object
    navigate("/payment", { state: { purchasedCourse: course } }); // Pass the course details
  };

=======
import React from 'react';
import './Card.css'; {/*Separate CSS for Card styling*/}

const Card = ({ image, title, description, price }) => {
>>>>>>> 0652350ff7081b9bf457c71e288e57c2cf9907e8
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
<<<<<<< HEAD
        <p className="card-price">{price}</p>
        <button className="card-button" onClick={handlePurchase}>
          Pay Now
        </button>
=======
        <p className="card-price">{ price }</p>
        <button className="card-button" onClick={()=>alert("Product Payment form")}>Pay Now</button>
>>>>>>> 0652350ff7081b9bf457c71e288e57c2cf9907e8
      </div>
    </div>
  );
};

export default Card;
