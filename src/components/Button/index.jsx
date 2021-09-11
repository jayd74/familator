import React from "react";

const Button = ({ copy, value, setRelation }) => {
  const handleClick = (relation) => {
    setRelation(relation);
  };
  return <button onClick={() => handleClick(copy)}>{copy}</button>;
};

export default Button;
