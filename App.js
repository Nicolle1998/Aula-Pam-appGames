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
   cor="#FDA7DF"

   Logo2="game-controller" 
   texto2="Jogar"
   cor2="#833471"
   /> 

<Botao
   Logo="game-controller" 
   texto="Jogar"
   cor="#9980FA"

   Logo2="game-controller" 
   texto2="Jogar"
   cor2="#5758BB"
   /> 

<Botao
   Logo="game-controller" 
   texto="Jogar"
   cor="#1289A7"

   Logo2="game-controller" 
   texto2="Jogar"
   cor2="#e77f67"
   /> 



   

    </View>
  );
}

