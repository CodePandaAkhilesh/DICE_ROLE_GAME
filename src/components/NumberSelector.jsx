import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({ error, setError, selectedNumber, setSelectedNumber }) => {
  
  const arrNumber = [1,2,3,4,5,6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {
          arrNumber.map((value,i) => (
            <Box 
              isSelected={value == selectedNumber}
              key={i}
              onClick={ () => numberSelectorHandler(value)}
            >{value}</Box>))
        }
        {/* <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box> */}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
  
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;

  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props)=> props.isSelected ? "black" : "white"};
  color: ${(props)=> props.isSelected ? "white" : "black"};
`;