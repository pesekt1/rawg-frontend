import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppendImageUrl from "../services/image-crop";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <>
      {isLoading && <Spinner />}
      {error && <div>{error}</div>}
      <List>
        {genres.map((genre) => (
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
                onClick={() => onSelectedGenre(genre)}
                variant="link"
                fontSize="lg"
                colorScheme={
                  selectedGenre?.id === genre.id ? "yellow" : "white"
                }
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
