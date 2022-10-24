// Library imports
import axios from "axios";
import { useEffect, useState } from "react";

// Components
import LogoMain from "../components/LogoMain";
import PokemonBlock from "../components/PokemonBlock";
import Filter from "../components/FilterPokemon";

// Custom hooks
import useCreateUniqueId from "../custom_hooks/CreateId";
import { stateCache } from "../custom_hooks/StateCache";

// Component declaration
const HomePage = (props) => {
  const createId = useCreateUniqueId;
  const [pokeList, setPokeList] = useState(null);
  const [backupList, setBackupList] = useState(null);

  // Run useEffect only once by leaving dep array empty
  useEffect(() => {
    if (!stateCache.homeState) {
      console.log("Async home api calling");
      async function getPokemons() {
        const pokeResponse = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=300"
        );
        // Cache the API data on first load
        stateCache.homeState = pokeResponse.data.results;
        setPokeList(pokeResponse.data.results);
        setBackupList(pokeResponse.data.results);
      }
      getPokemons();
    } else {
      // Retrieve from cache if exists
      setPokeList([...stateCache.homeState]);
      setBackupList([...stateCache.homeState]);
    }
  }, []);

  // Look at making this component
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
    <div className="poster-wrapper">
      <LogoMain />
      <Filter callBack={startFilter} />
      <div className="flex-row poke-list">
        {pokeList ? (
          pokeList.map((pokemon, index) => {
            return (
              <PokemonBlock
                key={createId()}
                name={pokemon.name}
                url={pokemon.url}
              />
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
