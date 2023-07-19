export default interface MovieInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  genres?: [{ id: number; name: string }];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  tagline?: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
  runtime?: number;
  budget?: number;
}
