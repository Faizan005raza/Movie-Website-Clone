"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function MovieDetailPage() {
  const params = useParams();
  const slug = params.slug;


  useEffect(() => {
    fetch("https://imdb.iamidiotareyoutoo.com")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="text-white pt-20">
      <h2 className="text-3xl font-bold">Movie Details: {slug}</h2>
    </div>
  );
}
