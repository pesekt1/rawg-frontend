import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import ApiClient from "../services/api-client";
import { Screenshot } from "../entities/Screentshot";

const useScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
  });
};

export default useScreenshots;
