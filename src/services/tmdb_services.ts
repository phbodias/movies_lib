import tmdb_api from "./tmdb_api";

export const getPopularMovies = async () => {
  const popularMovies = await tmdb_api.get("movie/popular");
  console.log(popularMovies.data);
  return;
};
