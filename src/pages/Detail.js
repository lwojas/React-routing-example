import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { Interface } from "../custom_hooks/Interface";

const DetailPage = (props) => {
  //   console.log(props );
  const route_parameters = useParams(); // Used for dynamic routing

  const { Dispatch } = Interface;

  let location = useLocation();
  const { state } = location;
  // console.log(state);

  let abilities = [];

  // const [abilityInfo, setAbilityInfo] = useState(null);

  const [pokeDetails, setpokeDetails] = useState({
    pokeInfo: null,
    pokeBio: "Poke bio",
    pokeAbilities: null,
  });

  // const getAbility = async (item) => {
  //   const res = await axios.get(item.ability.url);
  //   // const result = res.data
  //   console.log(res.data);
  //   return res.data;
  // };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll window to top on entry
    const getDetails = async () => {
      try {
        // console.log(state.url);
        const pokeResponse = await axios.get(state.url);
        const dexRes = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokeResponse.data.id}`
        );

        // Map abilities

        // pokeResponse.data.abilities.map(async (item, key) => {
        //   const res = await axios.get(item.ability.url);
        //   abilities[key] = res.data;
        //   if (abilities.length === pokeResponse.data.abilities.length) {
        //     setpokeDetails({
        //       pokeInfo: pokeResponse.data,
        //       pokeBio: dexRes.data,
        //       pokeAbilities: abilities,
        //     });
        //   }
        // });

        for (let i = 0; i < pokeResponse.data.abilities.length; i++) {
          let res = await axios.get(pokeResponse.data.abilities[i].ability.url);
          abilities[i] = res.data;
          if (abilities.length === pokeResponse.data.abilities.length) {
            setpokeDetails({
              pokeInfo: pokeResponse.data,
              pokeBio: dexRes.data,
              pokeAbilities: abilities,
            });
          }
        }
        // console.log(abilities[0].effect_entries[1].short_effect);

        Dispatch("tipOff");
      } catch {
        console.log("Error");
      }
      // console.log(pokeDetails);
    };
    getDetails();
  }, []);

  return (
    <div className="poke-card">
      {/* {console.log(pokeDetails)} */}
      {pokeDetails.pokeInfo ? (
        <div>
          <div className="flex-row poke-card-header">
            <h1>{route_parameters.pokemon_name}</h1>
            <h3>
              HP{" "}
              <span className="h3-large">
                {pokeDetails.pokeInfo.stats[0].base_stat}
              </span>
            </h3>
          </div>

          <img
            alt="Pokemon"
            src={
              pokeDetails.pokeInfo.sprites.other["official-artwork"]
                .front_default
            }
          />
          <div className="flex-row margin-center poke-card-vitals">
            <p>
              <b>Weight: </b>
              {pokeDetails.pokeInfo.weight / 10} kg,
            </p>
            <p>
              <b>Height: </b>
              {pokeDetails.pokeInfo.height / 10} m
            </p>
          </div>
          <div className="poke-ability">
            {pokeDetails.pokeInfo.abilities.map((item, index) => (
              <div key={index} className="flex-row">
                <p>
                  {" "}
                  {item.ability.name}{" "}
                  <span>
                    {console.log(pokeDetails.pokeInfo)}
                    {pokeDetails.pokeAbilities
                      ? pokeDetails.pokeAbilities[index].effect_entries[1]
                          .short_effect
                      : ""}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <p className="p-bio">
            {pokeDetails.pokeBio.flavor_text_entries[1].flavor_text}
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
