import "../assets/css/galeria.css";
import Heart from "./Heart";
import Context from "../Context";
import React, { useContext } from "react"

export default function Home() {

  const { fotos } = useContext(Context);


  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((item) => (<div key={item.id}
        className="foto"
        style={{ backgroundImage: `url(${item.src.tiny})` }}
      >
        <Heart filled={item.liked} id={item.id} />
        <p>{item.alt}</p>
      </div>
      ))}
    </div>
  );
}
