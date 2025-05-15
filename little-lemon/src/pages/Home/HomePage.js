import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Specials from "../../components/Specials";
import CustomersSay from "../../components/CustomersSay";
import Chicago from "../../components/Chicago";
import Poster from "../../components/Poster"

function Home() {
  return (
    <div className="App">
      <Header />
      <Poster />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </div>
  );
}

export default Home;
