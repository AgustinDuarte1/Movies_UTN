
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 

export async function generos() {
  try {
    const response = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=es-ES`);

    if (!response.ok) {
      throw new Error("Error al obtener los géneros de películas");
    }

    const data = await response.json();
    return data.genres; // devuelve un array con los géneros
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function populares() {
  try {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`);
    
    if (!response.ok) {
      throw new Error("Error al obtener las películas populares");
    }

    const data = await response.json();
    return data.results; // devuelve un array con las películas
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function peliculasByGeneros(generoId) {
  try {
    const response = await fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=${generoId}`
    );
    if (!response.ok) {
      throw new Error("Error al obtener películas por género");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}