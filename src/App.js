import "./styles.css";
import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Context from "./Context";

export default function App() {
  const endpoint = "/fotos.json";
  const [fotos, setFotos] = useState([])

  useEffect(() => {
    buscarFotos()
  }, [])

  const buscarFotos = async () => {
    const res = await fetch(endpoint)
    const { photos } = await res.json()
    setFotos(photos)
  }

  return (
    <div className="App">
      <Context.Provider value={{fotos,setFotos}}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}