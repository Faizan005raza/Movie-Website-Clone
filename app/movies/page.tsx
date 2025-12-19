"use client";
import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Image from "next/image";
import { useFavourites } from "../context/FavouritesContext";
import Link from "next/link";

interface Movie {
  "#TITLE": string;
  "#IMG_POSTER": string;
}

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { favourites, toggleFavourite } = useFavourites();
  const slugify = (title: string) => {
    return title.toUpperCase().replace(/\s+/g, "-");
  };
  useEffect(() => {
    fetch("https://imdb.iamidiotareyoutoo.com/search?q=Captain")
      .then((res) => res.json())
      .then((data) => setMovies(data.description))
      .catch(console.error);
  }, []);

  return (
    <>
      <h1 className="text-center text-3xl text-white font-serif pt-5 mt-10">
        This is an Official Page of MoviesList.
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 bg-gray-900 text-white">
        {movies.map((movie) => {
          const isFavourite = favourites.some(
            (m) => m["#TITLE"] === movie["#TITLE"]
          );

          return (
            <div
              key={movie["#TITLE"]}
              className="relative border border-white p-3 rounded m-10"
            >
              <Link href={`/movies/${slugify(movie["#TITLE"])}`}>
                <div className="cursor-pointer">
                  <Image
                    src={movie["#IMG_POSTER"]}
                    alt={movie["#TITLE"]}
                    width={500}
                    height={100}
                    className="rounded-2xl"
                  />
                </div>
              </Link>

              <span
                className="absolute top-2 right-4 cursor-pointer"
                onClick={() => toggleFavourite(movie)}
              >
                {isFavourite ? (
                  <FaHeart color="red" size={30} />
                ) : (
                  <FaRegHeart color="red" size={30} />
                )}
              </span>

              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">{movie["#TITLE"]}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
