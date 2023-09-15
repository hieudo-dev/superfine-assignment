import { useContext } from "react";
import FeaturedJams from "../components/FeaturedJams";
import Header from "../components/Header";
import HeroJams from "../components/HeroJams";
import SearchInput from "../components/SearchInput";
import { StateContext } from "../context/stateContext";
import FeaturedGames from "../components/FeaturedGames";

export default function Home() {
  const state = useContext(StateContext);
  return (
    <main className="mb-10">
      <Header />
      <div className="mt-9 mb-6 hidden lg:mx-9 lg:flex lg:justify-end">
        <SearchInput />
      </div>
      <HeroJams jams={state.jams} />
      <FeaturedJams jams={state.featuredJams} className="mt-10" />
      <FeaturedGames games={state.games} className="mt-20" />
    </main>
  );
}
