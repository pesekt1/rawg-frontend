import React from "react";
import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const firstTrailer = data?.results[0];
  if (!firstTrailer) return null;

  return (
    <video
      src={firstTrailer.data[480]}
      controls
      poster={firstTrailer.preview}
      autoPlay={true}
    />
  );
};

export default GameTrailer;
