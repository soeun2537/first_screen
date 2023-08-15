import { useState } from "react";
import "../css/Button.css";

function Button({ url, imgUrl, title }) {
  const [mouseState, setMouseState] = useState(false);
  const onMouseOver = () => {
    setMouseState(true);
  };
  const onMouseOut = () => {
    setMouseState(false);
  };
  return (
    <a
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className="tile"
      style={{ backgroundColor: mouseState ? "#d2d2d2" : "white" }}
      href={url}
    >
      <img className="tileImg" src={imgUrl}></img>
      <div className="tileTitle">{title}</div>
    </a>
  );
}

export default Button;
