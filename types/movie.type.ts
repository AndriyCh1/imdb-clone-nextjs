export type Movie = {
  id: number;
  title?: string;
  name?: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path?: string;
  backdrop_path?: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  first_air_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieList = {
  page: number;
  results: Movie[];
};
