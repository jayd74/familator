import React, { useEffect, useState } from "react";
import Button from "../Button";
import { relations, getChineseRelation } from "./relations";
const Familator = () => {
  const [relationship, setRelationship] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getRelationInput();
  });

  const setRelation = (rel) => {
    setRelationship(relationship.concat(rel));
  };
  const getRelationInput = () => {
    let myRelation = "";
    relationship.forEach((rel, index) => {
      if (rel === "clear") {
        myRelation = "";
      } else if (index === relationship.length - 1) {
        myRelation = `${myRelation} ${rel}`;
      } else {
        myRelation = `${myRelation} ${rel}'s`;
      }
    });

    setInput(myRelation);
  };

  return (
    <>
      <h1>Familator</h1>
      <p>Input: {input && `My ${input}`}</p>
      <p>Relation: {getChineseRelation(input)}</p>
      {relations.map((relation) => (
        <Button key={relation} copy={relation} setRelation={setRelation} />
      ))}
      <Button key="clear" copy="clear" setRelation={setRelation} />
    </>
  );
};

export default Familator;
