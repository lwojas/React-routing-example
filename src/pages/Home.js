import axios from "axios";
import { useEffect, useState } from "react";

import LogoMain from "../components/LogoMain";
import PokemonBlock from "../components/PokemonBlock";
import Filter from "../components/FilterPokemon";
import ToolTip from "../components/ToolTip";

import useCreateUniqueId from "../custom_hooks/CreateId";
import { stateCache } from "../custom_hooks/StateCache";

const HomePage = (props) => {
  const createId = useCreateUniqueId;
  const [pokeList, setPokeList] = useState(null);
  const [backupList, setBackupList] = useState(null);
  const [showToolTip, setShowToolTip] = useState(false);

  useEffect(() => {
    if (!stateCache.homeState) {
      console.log("Async home api calling");
      async function getPokemons() {
        const pokeResponse = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        stateCache.homeState = pokeResponse.data.results;
        setPokeList(pokeResponse.data.results);
        setBackupList(pokeResponse.data.results);
      }
      getPokemons();
    } else {
      setPokeList([...stateCache.homeState]);
      setBackupList([...stateCache.homeState]);
    }
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

  const displayToolTip = {
    On(props) {
      setShowToolTip(true);
    },
    Off(props) {
      setShowToolTip(false);
    },
  };

  // const removeToolTip = (props) => {
  //   setShowToolTip(false);
  // };

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
