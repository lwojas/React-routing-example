import { NavLink, MemoryRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { pokeHash } from "../custom_hooks/StateCache";
import { UIactions } from "../custom_hooks/Interface";

const drawId = (id) => {
  if (id < 10) {
    return "00" + id;
  } else if (id < 100) {
    return "0" + id;
  } else {
    return id;
  }
};

const PokemonBlock = (props) => {
  const [pokeDetails, setpokeDetails] = useState(null);

  // console.log(props);

  const { showTip, hideTip } = UIactions;

  const newState = { name: props.name, url: props.url };

  useEffect(() => {
    if (!pokeHash[props.name]) {
      console.log("Api caller in pokemon block");
      async function getDetails() {
        const pokeResponse = await axios.get(props.url);
        pokeHash[props.name] = pokeResponse.data;
        setpokeDetails(pokeResponse.data);
      }
      getDetails();
    } else {
      setpokeDetails(pokeHash[props.name]);
    }
  }, []);

  return (
    <MemoryRouter>
      <NavLink
        className="flex-child"
        to={{
          pathname: `/detail/${props.name}`,
        }}
        state={newState}

        // onMouseLeave={props.MouseLeave}
      >
        <div
          className="mouse-stop"
          customprops="Test for props"
          onMouseEnter={showTip}
          onMouseLeave={hideTip}
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
            <h3>
              #{pokeDetails ? drawId(pokeDetails.id) : ""} {props.name}
            </h3>
          </div>
        </div>
      </NavLink>
    </MemoryRouter>
  );
};

export default PokemonBlock;
