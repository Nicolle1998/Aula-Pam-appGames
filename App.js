import { FlatList, StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/Cabecalho';
import Botao from './src/components/botao';
import Jogos from './src/components/jogos';
import Dados from './src/Dados/dadosJogos';
import DadosCarrossel from './src/Dados/carrossel';
import ImagemCarrosel from './src/components/ImagemCarrossel';

export default function App() {
  return (
    <View>

  <Cabecalho /> 

   <Botao
   Logo="game-controller" 
   texto="Jogos"
   cor="#FDA7DF"

   Logo2="game-controller" 
   texto2="Series"
   cor2="#833471"
   /> 

<Botao
   Logo="game-controller" 
   texto="Filmes"
   cor="#9980FA"

   Logo2="game-controller" 
   texto2="Livros"
   cor2="#5758BB"
   /> 

<Botao
   Logo="game-controller" 
   texto="Compra"
   cor="#1289A7"

   Logo2="game-controller" 
   texto2="Esporte"
   cor2="#e77f67"
   /> 
   

  <Text style = {{fontSize: 20, margin: 10, marginTop: 30}}> 
  Jogos em Destaque</Text>

  <View>
  <FlatList
   horizontal = {true}
   data = {Dados}
   keyExtractor = {( item) => item.id }
   renderItem = { ({ item }) => (

  
    <Jogos
    titulo = {item.nome}
    imagem = {item.imagem}
    valor = {item.valor}
    />
   )} 
  
   />

   
  

  
  <Text style = {{fontSize: 20, margin: 10, marginTop: 30}}> 
  Próximo destaques</Text>

  </View>
 
  <View>
  <FlatList
   horizontal = {true}
   data = {DadosCarrossel}
   keyExtractor = {( item) => item.id }
   renderItem = { ({ item }) => (

  
    <ImagemCarrosel
    
    titulo = {item.nome}
    imagem = {item.imagem}
    valor = {item.valor}
    />
   )} 
  
   />

  </View>

   

    </View>
  );
}

