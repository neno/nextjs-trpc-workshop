import { IMovie } from './movie';

export type IMovieItem = Pick<IMovie, 'id' | 'title' | 'poster_path' | 'release_date'>
