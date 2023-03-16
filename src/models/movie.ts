export interface IMovie {
  id: number;
  userId?: number;
  imdb_id: string;
  title: string;
  tagline: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  overview: string;
  genres: string;
  budget: number;
  revenue: number;
  homepage: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  createdAt?: Date;
  updatedAt?: Date;
}
