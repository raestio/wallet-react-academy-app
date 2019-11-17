import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  background-color: #e6edec;
  display: flex;
  align-items: center;
  margin: 2px;
  justify-content: center;
  &:hover {  
    background-color: #67ceef;
  }
`;

const StyledLabel = styled.div`
  font-size: 1.5rem;
`;

const StyledAmount = styled.div`
  font-size: 1.5rem;
  margin-left: 2.5rem;
  color: ${({isNegative}) => isNegative ? 'red' : 'green'};
`;

const DeleteTransactionButtonContainer = styled.div`
  position: absolute;
  right: 0;
  padding-right: 2px;
`;

const DeleteTransactionButtonStyled= styled.button`
  padding: 3px 5px;
  margin: 1px;
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

const Transaction = ({label, amount, onDelete, onClick}) => (
      <Container onClick={onClick}>
        <StyledLabel>{label}</StyledLabel>
        <StyledAmount isNegative={amount < 0}>{amount}</StyledAmount>
        <DeleteTransactionButtonContainer>
          <DeleteTransactionButtonStyled onClick={onDelete}>X</DeleteTransactionButtonStyled>
        </DeleteTransactionButtonContainer>
      </Container>
);

export default Transaction;