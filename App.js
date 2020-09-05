import React, {useState} from 'react';
import styled from 'styled-components';
import {Text, Button} from 'react-native';

const Pagina = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Paragrafo = (props) => {
  return <Text>{props.frase}</Text>;
};
  
export default () => {
  const [valor, alteraValor] = useState(4);

  const incrementar = () =>{
      alteraValor(valor+1);
  };  
  return (
    <Pagina>
      <Text>{valor}</Text>
      <Text>{valor}</Text>
      <Button title="Incrementar" onPress={incrementar} />
      <Paragrafo frase="Frase passada por props"/>
      <Paragrafo frase="nova frase"/>
    </Pagina>
  );
};
