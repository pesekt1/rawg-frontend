import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genresData } = useGenres();
  const selectedGenre = genresData?.results.find(
    (g) => g.id === gameQuery.genreId
  );

  const { data: platformsData } = usePlatforms();
  const selectedPlatform = platformsData?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
