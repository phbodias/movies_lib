import ActorInterace from "../types/actorType";
import GenreListInterface from "../types/genreType";
import MovieInterface from "../types/movieType";
import tmdb_api from "./tmdb_api";

interface GetMoviesResponse {
  page: number;
  results: MovieInterface[];
  total_pages: number;
  total_results: number;
}

interface GetGenresResponse {
  genres: GenreListInterface[];
}

interface GetCastResponse {
  id: number;
  cast: ActorInterace[];
}

export const getMoviesList = async (
  requestList: number,
  page: number
): Promise<GetMoviesResponse> => {
  const requestOptions = ["popular", "upcoming", "now_playing", "top_rated"];

  const res = await tmdb_api.get(`movie/${requestOptions[requestList]}`, {
    params: { page },
  });

  const data = res.data as GetMoviesResponse;

  return data;
};

export const getGenres = async () => {
  const res = await tmdb_api.get("/genre/movie/list");

  const { genres } = res.data as GetGenresResponse;

  const genresDict: { [id: number]: string } = {};

  for (let i = 0; i < genres.length; i++) {
    genresDict[genres[i].id] = genres[i].name;
  }

  return genresDict;
};

export const getMovieById = async (id: string): Promise<MovieInterface> => {
  const res = await tmdb_api.get(`/movie/${id}`);

  const data = res.data as MovieInterface;

  return data;
};

export const getMovieCast = async (id: string): Promise<ActorInterace[]> => {
  const res = await tmdb_api.get(`/movie/${id}/credits`);

  const data = res.data as GetCastResponse;

  return data.cast.filter((worker) => {
    return worker.known_for_department === "Acting"
  });
};
