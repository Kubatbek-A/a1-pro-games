import { Grid, Typography } from "@mui/material";

import { fetchGames } from "@/api/fetchGames";
import { Game } from "@/types/game";
import GameDetails from "@/components/GameDetails/GameDetails";

type Props = {
  params: { seo_title: string };
};

let resolve: any;

export async function generateMetadata() {
  let metaData = await getMetadata();

  return metaData;
}

const getMetadata = () => {
  return new Promise((res, rej) => {
    if (resolve && typeof resolve === "object") {
      res(resolve);
    }

    rej();
  });
};

export default async function GameItem({ params: { seo_title } }: Props) {
  const games: Game[] = await fetchGames();
  const game = games.find((game: Game) => game.seo_title === seo_title)!;

  if (!game) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Typography variant="h5" component="h2">
          Sorry, Game not found
        </Typography>
      </Grid>
    );
  }

  const meta = {
    title: game?.seo_title,
  };

  if (resolve && typeof resolve === "function") {
    resolve(meta);
  } else {
    resolve = meta;
  }

  return (
    <Grid
      container
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography gutterBottom variant="h1" component="div" noWrap>
        Game - {game.title}
      </Typography>
      <Grid item>
        <GameDetails game={game} size={345} />
      </Grid>
    </Grid>
  );
}
