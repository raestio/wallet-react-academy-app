import React from 'react';
import styled from "styled-components";

const NavigationStyled = styled.div`
  position: absolute;
  right: 0;
`;

const NavigationButtonStyled = styled.button`
  padding: 5px 10px;
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

const Navigation = () => (
    <NavigationStyled>
      <NavigationButtonStyled>Graph</NavigationButtonStyled>
    </NavigationStyled>
);

export default Navigation;