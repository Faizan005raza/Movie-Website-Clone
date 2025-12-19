import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl text-center pt-15 text-white">
        Welcome to the Cinema.
      </h1>
      <p className="text-white mt-10">
        If you want to explore the Movie List, Click on the Movies Link present
        on the Navbar.
      </p>
    </>
  );
}
