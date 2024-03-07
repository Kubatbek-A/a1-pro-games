import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { CLOUDFRONT_URL } from "@/helpers/constants";
import { Game } from "@/types/game";

type Props = {
  game: Game;
  size?: number;
};

export default function GameDetails({ game, size = 245 }: Props) {
  return (
    <Card sx={{ width: size }}>
      <CardMedia
        sx={{ height: size }}
        image={`${CLOUDFRONT_URL}/${game.identifier}.webp`}
        title={game.seo_title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {game.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Provider:</strong> {game.provider}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Categories:</strong>{" "}
          {game.categories.map((category, idx) => (
            <span key={`${idx}-${category}`}>{category}, </span>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
}
