import { Game } from "@/types/game";
import { Grid } from "@mui/material";
import Link from "next/link";
import GameDetails from "../GameDetails/GameDetails";

type Props = {
  game: Game;
};

export default function GameCard({ game }: Props) {
  return (
    <Grid item>
      <Link href={`games/${game.provider}/${game.seo_title}`}>
        <GameDetails game={game} />
      </Link>
    </Grid>
  );
}
