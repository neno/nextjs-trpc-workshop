import { type NextApiRequest, type NextApiResponse } from 'next';
import { searchMovies } from '~/lib/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const searchResults = await searchMovies(req.query.q as string);
  res.status(200).json({ results: searchResults?.results ?? [] });
}
