import { Movie } from '@prisma/client';
import { z } from "zod";
import { getMovieById } from '~/lib/api';
import { type FullMovieData, type IMovie } from '~/models/full-movie-data';

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const movieRouter = createTRPCRouter({

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.movie.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  create: protectedProcedure
    .input(z.object({
      id: z.number(),
    }))
    .mutation(async ({ ctx, input }) => {
      const newMovie: FullMovieData | undefined = await getMovieById(input.id);

      if (newMovie) {
        const mappedMovie = mapFullMovieToMovie(newMovie);
        return ctx.prisma.movie.create({
          data: {
            ...mappedMovie,
            userId: ctx.session.user.id,
          },
        });
      }
    }
  ),

  delete: protectedProcedure
    .input(z.object({
      id: z.number(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.movie.delete({
        where: {
          id: input.id,
        },
      });
    }
  ),

});

export function mapFullMovieToMovie(fullMoive: FullMovieData): IMovie {
  return {
    id: fullMoive.id,
    imdb_id: fullMoive.imdb_id,
    title: fullMoive.title,
    tagline: fullMoive.tagline,
    poster_path: fullMoive.poster_path,
    release_date: fullMoive.release_date,
    runtime: fullMoive.runtime,
    overview: fullMoive.overview,
    genres: fullMoive.genres.map((genre) => genre.name).join(', '),
    budget: fullMoive.budget,
    revenue: fullMoive.revenue,
    homepage: fullMoive.homepage,
    popularity: fullMoive.popularity,
    vote_average: fullMoive.vote_average,
    vote_count: fullMoive.vote_count,
  };
}
