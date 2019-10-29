import React from 'react';
import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterButton = styled.button`
  padding: 5px 10px;
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

const TransactionListFilter = ({ setFilter }) => (
    <ButtonGroup>
      <FilterButton onClick={() => setFilter('ALL')}>ALL</FilterButton>
      <FilterButton onClick={() => setFilter('IN')}>IN</FilterButton>
      <FilterButton onClick={() => setFilter('OUT')}>OUT</FilterButton>
    </ButtonGroup>
);

export default TransactionListFilter;