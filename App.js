
import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const Texto = styled.Text`
  font-size: 30px
  color: #00ffff;
`;
const Pagina = styled.SafeAreaView`
  background-color: yellow;
  flex: 1;
`;
export default () => {
  
  return (
    <Pagina>
      <Text>Ola Mundo I</Text>
      <Text>Ola Mundo II</Text>
      <Texto>Ola Mundo Novo</Texto>
    </Pagina>
  );
};
