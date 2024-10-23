import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import HowItWorks from "./components/HowItWorks";
import KeyFeatures from "./components/KeyFeatures";
import Product from "./components/Product";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <HowItWorks />
      <KeyFeatures />
      <Product />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
