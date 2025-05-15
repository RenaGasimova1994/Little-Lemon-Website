import React from "react";
import "./Specials.css";
import deliveryIcon from "../assets/images/deliveryIcon.svg";
import greekSalad from "../assets//images/greekSalad.jpg";
import bruchetta from "../assets//images/bruchetta.svg";
import lemonDessert from "../assets/images/lemon dessert.jpg";


const SpecialFoodCard = ({ imageUrl, title, price, description }) => {
  return (
    <div className="special-card">
      <img src={imageUrl} alt={title} className="special-card-image" />
      <div className="special-card-header">
        <span className="special-card-title">{title}</span>
        <span className="special-card-price">${price}</span>
      </div>
      <p className="special-card-body">{description}</p>
      <div className="special-card-footer">
        <button className="special-card-button">Order a delivery</button>
        <img src={deliveryIcon} alt="Delivery" />
      </div>
    </div>
  );
};

const Specials = () => {
  return (
    <div className="specials-container" id="menu">
      <div className="specials-top">
        <h1>This week's specials!</h1>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="specials-cards">
        <SpecialFoodCard
          imageUrl={greekSalad}
          title="Greek Salad"
          price={12.99}
          description="The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with garlic and rosemary croutons."
        />
        <SpecialFoodCard
          imageUrl={bruchetta}
          title="Bruchetta"
          price={7.99}
          description="Our Bruschetta is made from grilled bread smeared with garlic and seasoned with salt and olive oil."
        />
        <SpecialFoodCard
          imageUrl={lemonDessert}
          title="Lemon Dessert"
          price={6.99}
          description="This comes straight from grandma’s recipe book, with the most authentic ingredients imaginable."
        />
      </div>
    </div>
  );
};

export default Specials;
