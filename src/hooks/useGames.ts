import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import ApiClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms("1h"),
    //allPages is an array of all the pages that have been fetched so we can use it to calculate the next page
    getNextPageParam: (lastPage, allPages) => {
      // if lastPage.next is null, return undefined to stop fetching, because there are no more pages
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
