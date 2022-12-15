import Context from "../Context";
import { useContext } from "react";
import "../assets/css/galeria.css";

export default function Favoritos() {

  const { fotos } = useContext(Context);

  const favoritos = fotos.filter(el => el.liked == true)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favoritos.map((item) => (<div key={item.id}
          className="foto"
          style={{ backgroundImage: `url(${item.src.tiny})` }}
        >
          <p>{item.alt}</p>
        </div>
        )
        )
        }
      </div>
    </div>
  );
}