import { type IApiReviewsByMovieResult } from '~/models/api-review-results';
import { type FullMovieData } from '~/models/full-movie-data';
import { type IApiSearchResult } from '~/models/search-results';


const fetchData = async (path: string, params?: string) => {
  const url = `https://api.themoviedb.org/3/${path}?api_key=00f3f32198696caff437631c007a7548${params ? `&${params}` : ''}`;
  console.log('fetchData - api', url);
  
  const res = await fetch(url);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return await res.json();
}

// export async function getPopularMovies(): Promise<IApiSearchResult> {
//   return await fetchData('movie/popular');
// }

export async function searchMovies(searchTerm: string): Promise<IApiSearchResult | undefined> {
  if (searchTerm) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await fetchData('search/movie', `query=${searchTerm}`);
  }
}

export async function getMovieById(id: number): Promise<FullMovieData | undefined> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return await fetchData(`movie/${id}`);
}

// export async function getMovieReviews(id: number): Promise<IApiReviewsByMovieResult | undefined> {
//   return await fetchData(`movie/${id}/reviews`);
// }