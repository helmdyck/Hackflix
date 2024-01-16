import React from "react";
import "../App.css";
import Movies from "../components/Movies";
import Header from "../components/HomeHeader";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

function HomePaginated() {
  const [isLoading, setIsLoading] = useState(true);

  //Tiempo de spinner antes de mostrar el home
  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return !isLoading ? (
    <>
      <Header />
      
      <Footer />
    </>
  ) : (
    <div className="container align-items-center">
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default HomePaginated;