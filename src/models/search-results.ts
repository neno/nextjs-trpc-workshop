import { IMovieItem } from './movie-item';

export interface IApiSearchResult {
  page: number;
  results: IMovieItem[];
  total_pages: number;
  total_results: number;
}
