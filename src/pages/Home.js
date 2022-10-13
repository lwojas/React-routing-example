import axios from "axios";
import { useEffect, useState } from "react";
import PokemonBlock from "../components/PokemonBlock";

const HomePage = () => {
  const [pokeList, setPokeList] = useState(null);

  useEffect(() => {
    async function getPokemons() {
      const pokeResponse = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      //   console.log(pokeResponse.data);
      setPokeList(pokeResponse.data.results);
    }
    getPokemons();
  }, []);

  return (
    <div>
      <h1 className="subtitle">Gotta catch 'em all!</h1>
      <div className="flex-row poke-list">
        {pokeList ? (
          pokeList.map((pokemon, index) => {
            //   console.log(pokemon);
            return (
              <PokemonBlock key={index} name={pokemon.name} url={pokemon.url} />
            );
          })
        ) : (
          <p>Loading ..</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
