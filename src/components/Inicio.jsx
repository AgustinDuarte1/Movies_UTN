import Container from "./Contenedor";
import Tarjeta from "./Tarjeta";

export default function Populares({ peliculas, busqueda, generoSeleccionado, nombreGenero }) {

  const titulo = busqueda
    ? `Resultados para: "${busqueda}"`
    : generoSeleccionado
    ? `Películas de: ${nombreGenero}`
    : "Películas Populares";

  return (
    <section className="px-6 py-8">
    <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 mb-6 drop-shadow-lg">
    {titulo}
    </h2>   

      {peliculas.length > 0 ? (
        <Container>
          {peliculas.map((pelicula) => (
            <Tarjeta
            key={pelicula.id}
            title={pelicula.title}
            image={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            descripcion={pelicula.overview}
            />
          ))}
        </Container>
      ) : (
        <p className="text-center text-gray-400 text-lg">
          No se encontraron resultados.
        </p>
      )}
    </section>
  );
}