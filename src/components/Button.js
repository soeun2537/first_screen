import { useState } from "react";
import PropTypes from "prop-types";
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
      style={{
        backgroundColor: mouseState ? "white" : "transparent",
        color: mouseState ? "black" : "white",
      }}
      href={url}
    >
      <img className="tileImg" src={imgUrl} alt={title}></img>
      <div className="tileTitle">{title}</div>
    </a>
  );
}

Button.propTypes = {
  url: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
