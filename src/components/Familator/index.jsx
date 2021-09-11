import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import { relations, getChineseRelation } from "./relations";
const Familator = ({ className }) => {
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
    <div className={className}>
      <h1>Familator</h1>
      <InputArea>
        Input <span>{input && `My ${input}`}</span>
      </InputArea>
      <RelationOutput>{getChineseRelation(input)}</RelationOutput>
      <CTAContainer>
        {relations.map((relation) => (
          <Button key={relation} copy={relation} setRelation={setRelation} />
        ))}
      </CTAContainer>
      <ClearBtn key="clear" copy="clear" setRelation={setRelation} />
    </div>
  );
};

export default styled(Familator)`
  max-width: 1000px;
  margin: 0 auto;
`;

const InputArea = styled.p`
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 10px;
  color: #70757a;
  display: flex;
  flex-direction: column;

  span {
    color: black;
  }
`;

const ClearBtn = styled(Button)`
  background: lightblue;
  color: white;

  &:hover {
    background: blue;
    cursor: pointer;
  }
`;

const RelationOutput = styled.p`
  border: 3px solid green;
  padding: 25px;
  font-size: 36px;
  font-weight: 500;
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
