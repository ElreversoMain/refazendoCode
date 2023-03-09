import React, { useState } from "react";
import styled from "styled-components";


const LikeButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? "#00cc00" : "#ccc")};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#009900" : "#bbb")};
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.loved ? "red" : "green")};
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;


const Buttons = () => {
  const [isActive, setIsActive] = useState(false);
  const [loved, setLoved] = useState(false);
  const handleClick = () => {
    setLoved(!loved);
  };
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <LikeButton isActive={isActive} onClick={handleButtonClick}>
        {isActive ? `Liked` : `Like`}
      </LikeButton>
      <Button loved={loved} onClick={handleClick}>
        {loved ? "Just Friend" : "Love"}
      </Button>
     
    </>
  );
};
export default Buttons;
