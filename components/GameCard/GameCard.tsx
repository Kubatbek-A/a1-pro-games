import { Game } from "@/types/game";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Link from "next/link";

const CLOUDFRONT_URL = "https://d2norla3tyc4cn.cloudfront.net/i/s3";

export default function GameCard({ game }: { game: Game }) {
  return (
    <Grid item key={game.identifier}>
      <Link href={`games/${game.provider}/${game.seo_title}`}>
        <Card sx={{ width: 245 }}>
          <CardMedia
            sx={{ height: 245 }}
            image={`${CLOUDFRONT_URL}/${game.identifier}.webp`}
            title={game.seo_title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" noWrap>
              {game.title}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}
