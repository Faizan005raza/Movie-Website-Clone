"use client";
import { useFavourites } from "../context/FavouritesContext";
import Image from "next/image";

export default function FavouritesPage() {
  const { favourites } = useFavourites();

  if (favourites.length === 0) {
    return (
      <p className="text-white text-center mt-15 text-3xl">
        No favourites added yet ❤️
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10 mt-10 bg-gray-900 text-white ">
      {favourites.map((movie) => (
        <div key={movie["#TITLE"]}>
          <Image
            src={movie["#IMG_POSTER"]}
            alt={movie["#TITLE"]}
            width={400}
            height={300}
            className="border-4 border-red-500 rounded-2xl"
          />
          <p className="text-center mt-2 text-2xl font-bold">
            {movie["#TITLE"]}
          </p>
        </div>
      ))}
    </div>
  );
}
