import React, {useState} from 'react';
import styled from 'styled-components';
import {TextInput, Text } from 'react-native';

const Pagina = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 200px;
  height: 50px;
  border: 1px solid #000;
`

export default () => {

  const [frase, alteraFrase ] = useState('Frase inicial');

  const alteraInput = (texto) => {
    alteraFrase(texto);
  };

  return (
    <Pagina>
      <Input value={frase} onChangeText={alteraInput} />
      <Text>Frase do input:{frase}</Text>
    </Pagina>
  );
};
