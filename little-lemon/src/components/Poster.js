import React from "react";
import { useNavigate } from "react-router-dom";
import "./Poster.css";
import restaurantFood from "../assets/images/restauranfood.jpg"; 
const Poster = () => {
  const navigate = useNavigate();

  return (
    <div className="poster-container">
      <div className="poster-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are family owned Mediterranean <br></br> restaurant, focused on traditional <br></br>  recipes served with a modern twist.
        </p>
        <button onClick={() => navigate("/bookings")} aria-label="Go to reservation table page.">
          Reserve a Table
        </button>
      </div>
      <div className="poster-image">
      <img src={restaurantFood} alt="food" />
      </div>
    </div>
  );
};

export default Poster;
