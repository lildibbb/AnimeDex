import Header from "../components/header";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-indigo-900 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to MeowAnime</h1>
        <p className="text-lg mb-8">
          Explore the best anime collections and stay updated with the latest
          episodes and features.
        </p>
        <Link
          to="/anime-list"
          className="bg-white text-indigo-500 hover:bg-indigo-700 hover:text-white font-semibold py-3 px-6 rounded-lg"
        >
          Browse Anime
        </Link>
      </main>
    </div>
  );
}
