import axios from "axios";
import { useEffect, useState } from "react";
import PokemonBlock from "../components/PokemonBlock";
import Filter from "../components/FilterPokemon";

const backupList = () => {};

const HomePage = () => {
  const [pokeList, setPokeList] = useState(null);
  const [backupList, setBackupList] = useState(null);

  useEffect(() => {
    async function getPokemons() {
      const pokeResponse = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      //   console.log(pokeResponse.data);
      setPokeList(pokeResponse.data.results);
      setBackupList(pokeResponse.data.results);
      // originalList = pokeResponse.data.results;
    }
    getPokemons();
  }, []);

  const startFilter = (query) => {
    if (pokeList) {
      const filterList = backupList.filter((item) => {
        if (item.name.startsWith(query)) {
          console.log(item);
          return item;
        }
      });
      setPokeList(filterList);
    }
  };

  return (
    <div>
      <h1 className="subtitle">Gotta catch 'em all!</h1>
      <Filter callBack={startFilter} />
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
