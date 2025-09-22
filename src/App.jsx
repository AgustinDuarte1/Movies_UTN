import { useEffect, useState } from "react";
import { generos, populares, peliculasByGeneros } from "./api/api";
import Navbar from "./components/Navbar";
import Buscador from "./components/Buscador";
import PanelFiltros from "./components/Filtros";
import Populares from "./components/Inicio";


function App() {
  const [seccionActiva, setSeccionActiva] = useState("populares"); // "inicio", "buscar", "filtros"
  const [busqueda, setBusqueda] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const [listaGeneros, setListaGeneros] = useState([]);
  const [generoSeleccionado, setGeneroSeleccionado] = useState(null);
  const [nombreGenero, setNombreGenero] = useState(""); // Para título dinámico

  const irAInicio = () => {
    setSeccionActiva("populares");
    setBusqueda("");
    setGeneroSeleccionado(null);
    setNombreGenero("");
  };

  const alternarBuscador = () => {
    setSeccionActiva((prev) => (prev === "buscar" ? "Populares" : "buscar"));
  };

  const alternarFiltros = () => {
    setSeccionActiva((prev) => (prev === "filtros" ? "Populares" : "filtros"));
  };

  const seleccionarGenero = (id) => {
    setGeneroSeleccionado(id);
    const genero = listaGeneros.find((g) => g.id === id);
    setNombreGenero(genero ? genero.name : "");
    setSeccionActiva("Populares"); // cerramos panel y mostramos la lista filtrada
  };

  useEffect(() => {
    async function obtenerGeneros() {
      const data = await generos();
      setListaGeneros(data);
    }
    obtenerGeneros();
  }, []);

  useEffect(() => {
    async function obtenerPeliculas() {
      let data = [];

      if (busqueda.trim() !== "") {
        // Búsqueda dinámica
        data = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&query=${busqueda}&language=es-ES&page=1`
        )
          .then((res) => res.json())
          .then((res) => res.results);
      } else if (generoSeleccionado) {
        data = await peliculasByGeneros(generoSeleccionado);
      } else {
        data = await populares();
      }

      setPeliculas(data);
    }

    obtenerPeliculas();
  }, [busqueda, generoSeleccionado]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <Navbar
        irAInicio={irAInicio}
        alternarBuscador={alternarBuscador}
        alternarFiltros={alternarFiltros}
      />

      {seccionActiva === "buscar" && (
        <Buscador
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          cerrarBuscador={() => setSeccionActiva("Populares")}
        />
      )}

      {seccionActiva === "filtros" && (
        <PanelFiltros
          listaGeneros={listaGeneros}
          generoSeleccionado={generoSeleccionado}
          setGeneroSeleccionado={seleccionarGenero}
          cerrarFiltros={() => setSeccionActiva("Populares")}
        />
      )}

      <Populares
        peliculas={peliculas}
        busqueda={busqueda}
        generoSeleccionado={generoSeleccionado}
        nombreGenero={nombreGenero}
      />
    </div>
  );
}

export default App;