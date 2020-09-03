import React from 'react';

import styled from 'styled-components';

const Pagina = styled.SafeAreaView`
  flex: 1;
  justify-content: space-around;
  flex-direction: column;

`;

const Quadrado = styled.View`
  height: 50px;
  width: 50px;
  background-color: ${(props) => props.cor};
`;

export default () => {
  
  return (
    <Pagina>
      <Quadrado cor="red" />
      <Quadrado cor="yellow" />
      <Quadrado cor="green" />
    </Pagina>
  );
};
