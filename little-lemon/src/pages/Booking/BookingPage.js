import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReservationForm from "../../components/ReservationForm";
import "./BookingPage.css"
function BookingPage() {


  return (
    <div className="container">
      <Header />
      <ReservationForm />
      <Footer />
    </div>
  );
}

export default BookingPage;
