import { Review } from './review';

export interface IApiReviewsByMovieResult {
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
}
