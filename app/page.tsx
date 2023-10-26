import Results from "../components/Results";
import { MovieList } from "../types/movie.type";

const API_KEY = process.env.API_KEY;

type Props = {
  searchParams?: {
    genre?: string;
  };
};

// It is server-side component so we can't use useSearchParams hook
export default async function Home({ searchParams }: Props) {
  const genre = searchParams?.genre || "fetchTrending";

  const url = `https://api.themoviedb.org/3/${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${API_KEY}&language=en-US&page=1`;

  const res = await fetch(url, { next: { revalidate: 10000 } });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: MovieList = await res.json();

  return (
    <div>
      <Results results={data.results} />
    </div>
  );
}
