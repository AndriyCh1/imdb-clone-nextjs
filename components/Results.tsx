import { Movie } from "../types/movie.type";

type Props = {
  results: Movie[];
};

export default function Results({ results }: Props) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
}
