import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {genres.map((genre) => (
        <div key={genre.id}>{genre.name}</div>
      ))}
    </>
  );
};

export default GenreList;
