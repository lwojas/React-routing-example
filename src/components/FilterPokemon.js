import { useState, useEffect } from "react";

const Filter = (props) => {
  const [filterPoke, setfilterPoke] = useState("");
  console.log(props);

  useEffect(() => {
    props.callBack(filterPoke);
  }, [filterPoke]);

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={filterPoke}
        onChange={(event) => {
          // console.log("new input .value:", event.target.value);
          setfilterPoke(event.target.value);
        }}
      />{" "}
      Something
    </div>
  );
};

export default Filter;
