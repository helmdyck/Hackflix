import React from "react";
import "../App.css";
import Movies from "../components/Movies";
import HomeHeader from "../components/HomeHeader"
import { useState, useEffect } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  //Tiempo de spinner antes de mostrar el home
  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return !isLoading ? (
    <>
      <HomeHeader />
      <Movies />
    
    </>
  ) : (
    <div className="container spinner">
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Home;
