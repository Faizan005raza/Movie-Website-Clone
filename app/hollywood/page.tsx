"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Movie {
  "#TITLE": string;
  "#IMG_POSTER": string;
}

export default function HollywoodList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [skip, setSkip] = useState(0);

  const limit = 3;

  useEffect(() => {
    fetch(
      `https://imdb.iamidiotareyoutoo.com/search?q=Captain&limit=${limit}&skip=${skip}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.description))
      .catch(console.error);
  }, [skip]);

  const nextPage = () => setSkip((prev) => prev + limit);
  const prevPage = () => setSkip((prev) => Math.max(prev - limit, 0));

  return (
    <>
      <div className="text-white text-center p-5">
        <h2 className="text-3xl">Hollywood Page</h2>
        <p className="pt-5">
          This is an official page of Hollywood movies where you will get all
          the listings.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {movies.map((movie) => (
          <div key={movie["#TITLE"]} className="text-white">
            <Image
              src={movie["#IMG_POSTER"]}
              alt={movie["#TITLE"]}
              width={400}
              height={300}
              className="rounded-lg"
            />
            <p className="mt-2 text-center">{movie["#TITLE"]}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 pb-10">
        <button
          onClick={prevPage}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:cursor-pointer"
        >
          Next
        </button>
      </div>
    </>
  );
}
