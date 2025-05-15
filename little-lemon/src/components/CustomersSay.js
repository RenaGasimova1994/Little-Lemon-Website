import "./CustomersSay.css"
import React from "react"


const CustomersSayCard = ({ customerImg, customerName, description }) => {
    return (
      <div className="customers-say-card">
             <img src={customerImg} alt="img" className="profile-image" />
             <span className="highlight">{customerName}</span>
             <div className="description">{description}</div>
      </div>
    );
};

const CustomersSay = () => {
    return (
        <div className="customers-container">
           <div className="title">
           <h2>What ours customers say!</h2>
           </div>
           <div className="customers-cards d-flex">
            <CustomersSayCard 
            customerImg="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            customerName="Leo"
            description="I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!"/>
               <CustomersSayCard 
            customerImg="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            customerName="Gabi"
            description="I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!"
        />
               <CustomersSayCard 
            customerImg="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            customerName="Bruno"
            description="I have been to many restaurants, but this one certainly stood out. The quality of the ingredients and the preparation of the dishes were impeccable. Not to mention the presentation, which was beautiful. It was an amazing dining experience!"
          />
           <CustomersSayCard 
            customerImg="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            customerName="Anna"
            description="The restaurant has a great variety of dishes and all the ones I tried were excellent. In addition, the price is fair and the service is very attentive. I will definitely recommend it to my friends."
        />
           </div>
        </div>
    );
}

export default CustomersSay