import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const DetailPage = (props) => {
  //   console.log(props );
  const route_parameters = useParams();
  const pokeName = route_parameters.pokemon_name;

  let location = useLocation();
  const { state } = location;
  console.log(state);

  const [pokeDetails, setpokeDetails] = useState(null);

  useEffect(() => {
    async function getDetails() {
      console.log(state.url);
      const pokeResponse = await axios.get(state.url);
      console.log(pokeResponse.data);
      setpokeDetails(pokeResponse.data);
    }
    getDetails();
  }, []);

  //   console.log(route_parameters);
  return (
    <div className="poke-card">
      <h1>{route_parameters.pokemon_name}</h1>
      {/* {console.log(pokeDetails)} */}
      {pokeDetails ? (
        <div>
          <img
            alt="Pokemon"
            src={pokeDetails.sprites.other["official-artwork"].front_default}
          />
          <p>
            <b>Weight: </b>
            {pokeDetails.weight} kg
          </p>
          <p>
            <b>Height: </b>
            {pokeDetails.weight} cm
          </p>
          <p>
            <b>Abilities: </b>
            {pokeDetails.abilities.map((item, index) => (
              <span key={index}> {item.ability.name}</span>
            ))}
          </p>
        </div>
      ) : (
        <p>Loading image...</p>
      )}
      {/* <img alt="Pokemon" src={pokeDetails.sprites.defaultFront} /> */}
    </div>
  );
};

export default DetailPage;
