import React from 'react';
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
            after click on dice if selected number is equal to dice number you will 
            get same point on dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be deducted</p>
      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    h2 {
        font-size: 24px;
    }
    .text {
        margin-top: 24px;
    }
    overflow-y: auto; /* Enables scroll only if needed */
    max-height: 90vh; /* Adjust this based on your layout */
`;