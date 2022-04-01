import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/Cabecalho';
import Botao from './src/components/botao';

export default function App() {
  return (
    <View>

  <Cabecalho /> 

   <Botao
   Logo="game-controller" 
   texto="Jogar"
   cor="transparent"
 

   /> 


   

    </View>
  );
}

