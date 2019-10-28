import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLabel = styled.div`
  font-size: 1.5rem;
`;

const StyledAmount = styled(StyledLabel)`
  margin-left: 2.5rem;
  color: ${({isNegative}) => isNegative ? 'red' : 'green'};
`;

const Transaction = ({label, amount}) => (
    <Container>
      <StyledLabel>{label}</StyledLabel>
      <StyledAmount isNegative={amount < 0}>{amount}</StyledAmount>
    </Container>
);

export default Transaction;