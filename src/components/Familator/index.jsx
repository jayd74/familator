import React, { useEffect, useState } from "react";
import Button from "../Button";
import relations from "./relations";
const Familator = () => {
  const [relationship, setRelationship] = useState([]);
  const [relCopy, setRelCopy] = useState([]);
  const setRelation = (rel) => {
    setRelationship(relationship.concat(rel));
  };

  useEffect(() => {
    getRelationText();
  });

  const getRelationText = () => {
    let text = "";
    relationship.forEach((rel, index) => {
      if (index === relationship.length - 1) {
        text = text + rel + " ";
      } else {
        text = text + rel + "'s ";
      }
    });

    setRelCopy(text && `My ${text}`);
  };
  return (
    <>
      <h1>Familator</h1>
      <p>{relCopy}</p>
      {relations.map((relation) => (
        <Button key={relation} copy={relation} setRelation={setRelation} />
      ))}
    </>
  );
};

export default Familator;
