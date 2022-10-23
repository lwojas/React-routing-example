import { useState } from "react";
import { globalInterface } from "../custom_hooks/Interface";

const pos = { x: 100, y: 100 };

const ToolTip = (props) => {
  const [showTip, setShowTip] = useState(false);

  const { actions } = globalInterface;

  const Show = (event) => {
    console.log(event.target.attributes.customprops.nodeValue);
    pos.x = event.target.offsetLeft + event.target.offsetWidth / 2;
    pos.y = event.target.offsetTop;
    setShowTip(true);
  };

  const Hide = () => {
    setShowTip(false);
  };

  actions.tipOn = Show;
  actions.tipOff = Hide;

  return (
    <div
      className={"tool-tip " + (showTip ? "show-element" : "hide-element")}
      style={{ top: pos.y, left: pos.x }}
    >
      <p>{props.info}</p>
    </div>
  );
};

export default ToolTip;
