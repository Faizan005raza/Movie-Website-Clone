"use client";
import { createContext, useContext, useState, useEffect } from "react";

export interface Movie {
  "#TITLE": string;
  "#IMG_POSTER": string;
}

interface FavouritesContextType {
  favourites: Movie[];
  toggleFavourite: (movie: Movie) => void;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(
  undefined
);

export function FavouritesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favourites, setFavourites] = useState<Movie[]>(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("favourites") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (movie: Movie) => {
    setFavourites((prev) => {
      const exists = prev.some((m) => m["#TITLE"] === movie["#TITLE"]);

      return exists
        ? prev.filter((m) => m["#TITLE"] !== movie["#TITLE"])
        : [...prev, movie];
    });
  };

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error("useFavourites must be used inside FavouritesProvider");
  }
  return context;
}
