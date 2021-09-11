import React from "react";
import styled from "styled-components";

const Button = ({ className, copy, setRelation }) => {
  const handleClick = (relation) => {
    setRelation(relation);
  };
  return (
    <button className={className} onClick={() => handleClick(copy)}>
      {copy}
    </button>
  );
};

export default styled(Button)`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 15px;

  &:hover {
    background: grey;
    color: white;
    cursor: pointer;
  }
`;
