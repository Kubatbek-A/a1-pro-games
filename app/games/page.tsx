import { Typography } from "@mui/material";

import { fetchGames } from "@/api/fetchGames";
import GamesList from "@/components/GamesList/GamesList";
import { Game } from "@/types/game";

export default async function Games() {
  const games: Game[] = await fetchGames();

  return (
    <div>
      <Typography variant="h1" textAlign="center">
        Games
      </Typography>
      <GamesList games={games} />
    </div>
  );
}
