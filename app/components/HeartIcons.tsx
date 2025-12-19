"use client";
import Image from "next/image";
import { Movie, useFavourites } from "@/context/FavouritesContext";

interface Props {
  movie: Movie;
}

export default function HeartIcon({ movie }: Props) {
  const { toggleFavourite, favourites } = useFavourites();
  const active = favourites.some((m) => m["#TITLE"] === movie["#TITLE"]);

  return (
    <Image
      src={active ? "/heart-filled.png" : "/heart.png"}
      alt="Favourite"
      width={22}
      height={22}
      onClick={() => toggleFavourite(movie)}
      className="cursor-pointer transition hover:scale-110"
    />
  );
}
