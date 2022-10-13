import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const PokemonBlock = (props) => {
  const [pokeDetails, setpokeDetails] = useState(null);

  useEffect(() => {
    async function getDetails() {
      //   console.log(state.url);
      const pokeResponse = await axios.get(props.url);
      console.log(pokeResponse.data);
      setpokeDetails(pokeResponse.data);
    }
    getDetails();
  }, []);

  return (
    <NavLink
      className="flex-child"
      to={{
        pathname: `/detail/${props.name}`,
      }}
      state={props}
    >
      {pokeDetails ? (
        <img
          alt="Pokemon"
          src={pokeDetails.sprites.other["official-artwork"].front_default}
        />
      ) : (
        "Loading image"
      )}

      <div className="card-detail">
        <h3>{props.name}</h3>
      </div>
    </NavLink>
  );
};

export default PokemonBlock;
