import Imagenes from "../../assets/JS/Data-Base";
import { fetchAPI } from "../../assets/JS/waterApp";

function Boton({ buscador, setBuscar }) {
  const onSerch = () => {
    setBuscar(true);
  };

  return (
    <>
      <button className="Busqueda" onClick={onSerch}>
        <img className="Imagen-Boton" src={Imagenes.Data.Boton} />
      </button>
    </>
  );
}

export default Boton;
