import "./Chicago.css"
import React from "react"
import Mario_and_Adrian_A from "../assets/images/chefs1.jpg";
import Mario_and_Adrian_B from "../assets/images/chefs2.jpg";

const Chicago = ({}) => {
  return (
    <div className="about-container d-flex">
    <div className="content">
    <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-txt">
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
        </p>
        <p className="lead-txt">
          To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
        </p>
    </div>
    <div className="images">
    <img src={Mario_and_Adrian_A} alt="Mario and Adrian" />
    <img src={Mario_and_Adrian_B} alt="Mario and Adrian" />
    </div>
    </div>
  )
}

export default Chicago