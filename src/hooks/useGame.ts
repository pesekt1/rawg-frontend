import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new ApiClient<Game>("games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.getOne(slug),
  });

export default useGame;
