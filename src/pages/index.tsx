import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Button } from "~/components/Button";
import { Gallery } from "~/components/Gallery";
import { type IMovieItem } from "~/models/movie-item";
import { IconPlus, IconTrash } from "~/components/icons";
import { api } from "~/utils/api";
import { Card } from "~/components/Card";
import { VerticalContainer } from "~/components/VerticalContainer";
import { AlertLogin } from "~/components/AlertLogin";
import { type IApiSearchResult } from "~/models/search-results";

export default function HomePage() {
  const router = useRouter();
  const searchTerm = router.query.q as string;
  const { data: sessionData } = useSession();

  const { data: searchResults } = useQuery(
    ["search", searchTerm],
    (): Promise<IApiSearchResult> =>
      fetch(`/api/movies?q=${searchTerm}`).then((res) => res.json()),
    { enabled: !!searchTerm }
  );

  const { data: movies, refetch: refetchMovies } = api.movie.getAll.useQuery(
    undefined, // no input
    {
      enabled: sessionData?.user !== undefined,
    }
  );

  const addMovie = api.movie.create.useMutation({
    onSuccess: () => {
      void refetchMovies();
    },
  });

  const deleteMovie = api.movie.delete.useMutation({
    onSuccess: () => {
      void refetchMovies();
    },
  });

  return (
    <VerticalContainer className="gap-8">
      {!sessionData?.user && <AlertLogin />}
      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-8">
          <h2>Search Results</h2>
          {searchResults && searchResults.results && (
            <Gallery>
              {searchResults.results.map((movie: IMovieItem) => (
                <Card key={movie.id} {...movie}>
                  {sessionData?.user && (
                    <Button onClick={() => addMovie.mutate({ id: movie.id })}>
                      <IconPlus />
                    </Button>
                  )}
                </Card>
              ))}
            </Gallery>
          )}
        </section>
        <section className="col-span-4 bg-neutral">
          <h2>Selected Movies</h2>
          <Gallery className="grid-cols-3">
            {movies &&
              movies?.map((movie) => (
                <Card key={movie.id} {...movie}>
                  <Button onClick={() => deleteMovie.mutate({ id: movie.id })}>
                    <IconTrash />
                  </Button>
                </Card>
              ))}
          </Gallery>
        </section>
      </div>
    </VerticalContainer>
  );
}
