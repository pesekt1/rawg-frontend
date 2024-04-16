import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  // platforms: Platform[];
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>(`/platforms/lists/parents`)
        .then((response) => response.data),
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
