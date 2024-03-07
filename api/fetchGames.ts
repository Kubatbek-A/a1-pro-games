import { API } from "@/helpers/constants";
import { Game } from "@/types/game";

export const fetchGames = async () => {
  const games: Game[] = await fetch(API, { cache: "force-cache" }).then((res) =>
    res.json(),
  );

  return games;
};
