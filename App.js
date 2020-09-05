import React, {useState} from 'react';
import styled from 'styled-components';
import {TextInput, Text, Button } from 'react-native';

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
  const [visivel, alteraVisibilidade] = useState(false);

  const alteraInput = (texto) => {
    alteraFrase(texto);
  };

  const visibilidade = () =>{
    alteraVisibilidade(!visivel);
  }

  return (
    <Pagina>
      <Input value={frase} onChangeText={alteraInput} />
      <Button title="Mostrar frase" onPress={visibilidade} />
      {visivel && <Text>Frase do input:{frase}</Text>}
    </Pagina>
  );
};
