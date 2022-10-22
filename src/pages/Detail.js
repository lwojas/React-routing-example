import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const DetailPage = (props) => {
  //   console.log(props );
  const route_parameters = useParams();
  const pokeName = route_parameters.pokemon_name;

  let location = useLocation();
  const { state } = location;
  // console.log(state);

  const [pokeDetails, setpokeDetails] = useState({
    pokeInfo: null,
    pokeBio: "Poke bio",
  });

  useEffect(() => {
    const getDetails = async () => {
      try {
        // console.log(state.url);
        const pokeResponse = await axios.get(state.url);
        const dexRes = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokeResponse.data.id}`
        );
        // console.log(dexRes.data);
        setpokeDetails({ pokeInfo: pokeResponse.data, pokeBio: dexRes.data });
      } catch {
        console.log("Error");
      }
      // console.log(pokeDetails);
    };
    getDetails();
  }, []);

  //   console.log(route_parameters);
  return (
    <div className="poke-card">
      <h1>{route_parameters.pokemon_name}</h1>
      {console.log(pokeDetails)}
      {pokeDetails.pokeInfo ? (
        <div>
          <p className="p-bio">
            {pokeDetails.pokeBio.flavor_text_entries[0].flavor_text}
          </p>
          <img
            alt="Pokemon"
            src={
              pokeDetails.pokeInfo.sprites.other["official-artwork"]
                .front_default
            }
          />
          <p>
            <b>Weight: </b>
            {pokeDetails.pokeInfo.weight / 10} kg
          </p>
          <p>
            <b>Height: </b>
            {pokeDetails.pokeInfo.height / 10} m
          </p>
          <p>
            <b>Abilities: </b>
            {pokeDetails.pokeInfo.abilities.map((item, index) => (
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
