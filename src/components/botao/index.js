import React, {fragment} from 'react';
import { View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Botao ({Logo,texto,cor,Logo2,texto2,cor2}){

    return(
 <View Style={estilo.containerBotoes1}>
 <TouchableOpacity style={[estilo.botoes ,{backgroundColor:cor}]}>
 <Ionicons name= {Logo} size={20} color="white"
 
 style= {{marginRight:10}}/>
   <Text style ={estilo.textoBotao} > {texto} </Text>

     </TouchableOpacity>

     <TouchableOpacity styule={[estilo.botoes , {backgroundColor:cor2}]}> 
     <ioniscons name= {Logo2} size={20} color="white"

     style = {{marginRight:10}}/>
     <Text Style = {estilo.textBotao} > {texto} </Text>

     </TouchableOpacity>


         
 </View>     
);
}

const estilo = StyleSheet.create({
     containerBotoes1:{
         flexDirection:'row',
         marginBottom:10,
         justifyContent:'center'

     },
     textBotao:{
         color:'white',
         fontweight:'bold'
     },
     botoes:{ 
         padding:5,
         marginHorizontal:10,
         width:'45%',
         alignItems:'center',
         justifyContent:'flex-start',

         fontSize:12,
         color:'white',
         flexDirection:'row',

     }
    


})