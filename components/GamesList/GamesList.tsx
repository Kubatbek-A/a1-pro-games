"use client";

import { Game } from "@/types/game";
import { Grid, Pagination, Stack } from "@mui/material";
import { useState } from "react";
import GameCard from "../GameCard/GameCard";

const ITEMS_PER_PAGE = 10;

export default function GamesList({ games }: { games: Game[] }) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
  const currentItems = games.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(games.length / ITEMS_PER_PAGE);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  return (
    <Grid container my={5} spacing={5} justifyContent="center">
      <Grid container item gap={5} justifyContent="center">
        {currentItems.map((item) => (
          <GameCard game={item} key={item.identifier} />
        ))}
      </Grid>

      <Grid item>
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            color="primary"
            onChange={handleChangePage}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
