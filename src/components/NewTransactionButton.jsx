import React from 'react';
import styled from "styled-components";

const NewTransactionButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewTransactionButtonStyled = styled.button`
  padding: 10px 24px;
  display: block;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .3);
  background-color: #00b7ff;
  color: #ecf0f1;
  transition: background-color .3s;
  &:hover {  
    background-color: #67ceef;
  }
`;


const NewTransactionButton = ({onClick}) => (
    <NewTransactionButtonContainer>
      <NewTransactionButtonStyled onClick={onClick}>
        New
      </NewTransactionButtonStyled>
    </NewTransactionButtonContainer>
);

export default NewTransactionButton;