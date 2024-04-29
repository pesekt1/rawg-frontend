import { SimpleGrid } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributets = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms
          .map((platform) => platform.platform.name)
          .join(", ")}
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => genre.name).join(", ")}
      </DefinitionItem>
      <DefinitionItem term="Metacritic">{game.metacritic}</DefinitionItem>
      <DefinitionItem term="Rating">{game.rating_top}</DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map((publisher) => publisher.name).join(", ")}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributets;
