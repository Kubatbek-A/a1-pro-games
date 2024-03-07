import GamesList from "@/components/GamesList/GamesList";
import { Game } from "@/types/game";
import { Typography } from "@mui/material";

const API = "https://nextjs-test-pi-hazel-56.vercel.app/data/games.json";

export default async function Games() {
  const gamesResponse = await fetch(API, { cache: "force-cache" });
  const games: Game[] = await gamesResponse.json();

  return (
    <div>
      <Typography variant="h1" textAlign="center">
        Games
      </Typography>
      <GamesList games={games} />
    </div>
  );
}
