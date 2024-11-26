import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, description, price }) => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    const course = { image, title, description, price }; // Construct the course object
    navigate("/payment", { state: { purchasedCourse: course } }); // Pass the course details
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">{price}</p>
        <button className="card-button" onClick={handlePurchase}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Card;
