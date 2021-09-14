import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dropRight from "lodash/dropRight";

import Button from "../Button";
import { relations } from "./relations";
import { familyMemberList } from "./family-member-list";

const Familator = ({ className }) => {
  const [relationship, setRelationship] = useState([]);
  const [input, setInput] = useState("");
  const [familyMember, setFamilyMember] = useState({});

  useEffect(() => {
    getRelationInput();
  });

  const setRelation = (rel) => {
    setRelationship(relationship.concat(rel));
  };

  const handleBackButton = () => {
    setRelationship(dropRight(relationship, 1));
  };

  const getRelative = (input) => {
    let fam = familyMemberList.find((member) => member.relationship === input);
    return fam;
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

    setInput(myRelation.trimStart());
    setFamilyMember(getRelative(myRelation.trimStart()));
  };

  return (
    <div className={className}>
      <h1>Familator</h1>
      <InputArea>
        Input <span>{input && `My ${input}`}</span>
        <button onClick={() => handleBackButton()}>Back</button>
      </InputArea>
      <RelationOutput>
        {familyMember?.title || "No Relative Found. Clear and try again."}
        {familyMember?.engTitle && <span>{familyMember?.engTitle}</span>}
      </RelationOutput>
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
  justify-content: center;
  height: 60px;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;

  span {
    margin-top: 10px;
    font-size: 24px;
    color: grey;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
