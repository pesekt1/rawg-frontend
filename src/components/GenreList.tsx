import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

import getCroppendImageUrl from "../services/image-crop";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      {isLoading && <Spinner />}
      {error && <div>{error.message}</div>}
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppendImageUrl(genre.image_background)}
                alt={genre.name}
                borderRadius={8}
                boxSize="30px"
                objectFit="cover"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="lg"
                colorScheme={selectedGenreId === genre.id ? "yellow" : "white"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
