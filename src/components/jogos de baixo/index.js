import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native'

export default function ImagemCarrosel({ titulo, valor, imagem }) {
    return(
        <TouchableOpacity style={estilo.containerJogos}>
            <Image
                style={estilo.images}
                source={require(`../../imagens/${imagem}`)}
            />

            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.valor}>{valor}</Text>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    containerJogos: {
        borderRadius: 30,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 250,
        marginLeft: 8,
        overflow: 'hidden'
    },
    titulo: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold'
    },
    valor: {
        color: 'green',
        fontSize: 12,
        marginLeft: 180,
        marginTop: 2,
        fontWeight: 'bold'
    },
    images: {
        width: '100%',
        height: '90%',
        borderRadius: 25
    }
})