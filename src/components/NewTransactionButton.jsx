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


const NewTransactionButton = ({onNewTransaction}) => {

  const generateTransaction = () => ({
    id: Math.random().toString(),
    label: `Transaction ${Math.floor(Math.random() * 1000)}`,
    amount: getRandomAmount()
  });
  const getRandomAmount = () => Math.floor(Math.random() * 10000 * randPlusOrMinus());
  const randPlusOrMinus = () => Math.random() < 0.5 ? -1 : 1;

  return (
      <NewTransactionButtonContainer>
        <NewTransactionButtonStyled onClick={() => {
          const newTransaction = generateTransaction();
          onNewTransaction(newTransaction);
        }}>
          Add new
        </NewTransactionButtonStyled>
      </NewTransactionButtonContainer>
  );
};

export default NewTransactionButton;