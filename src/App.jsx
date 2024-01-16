import "./App.css";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import { Routes, Route, useLocation } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import { Navigate } from "react-router-dom";
import Search from "./pages/Search";
import MyList from "./pages/MyList";
import HomePaginated from "./pages/HomePaginated";

function App() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
        <Route path="/sobre-nosotros" element={<About />}></Route>
        <Route path="/contacto" element={<Contact />}></Route>
        <Route path="/pelicula/:id" element={<Navigate replace to="/movie/:id" />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/mylist" element={<MyList />}></Route>
        <Route path="/pagination" element={<HomePaginated />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
