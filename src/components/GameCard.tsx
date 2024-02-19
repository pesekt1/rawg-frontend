import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={game.background_image}
        overflow="hidden"
        borderRadius="10"
      ></Image>
      <CardBody>
        <PlatformIconsList
          platforms={game.parent_platforms.map((pp) => pp.platform)}
        />
        <Heading fontSize="2x1">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
