import React from 'react';

import styled from 'styled-components';

const Pagina = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  flex-direction: row;
  flex-wrap:  wrap;
`;

const Quadrado = styled.View`
  height: 100px;
  width: 50px;
  background-color: ${(props) => props.cor};
 
`;

export default () => {
  
  return (
    <Pagina>
      <Quadrado cor="red" />
      <Quadrado cor="yellow" />
      <Quadrado cor="green" />
      <Quadrado cor="blue" />
      <Quadrado cor="red" />
      <Quadrado cor="yellow" />
      <Quadrado cor="green" />
      <Quadrado cor="blue" />
      <Quadrado cor="red" />
      <Quadrado cor="yellow" />
      <Quadrado cor="green" />
      <Quadrado cor="blue" />
    </Pagina>
  );
};
