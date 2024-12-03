import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Tela "Sobre" com título e descrição
export default function Sobre() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela Sobre</Text>
            <Text style={styles.message}>Esse é um aplicativo feito para uma avaliação na matéria de react native</Text>
        </View>
    );
}

// Estilos principais da tela
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Cor de fundo branca
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#068bff', // Cor do título
    },
    message: {
        fontSize: 16, // Tamanho da fonte da mensagem
        margin: 10, // Espaço ao redor da mensagem
        color: '#068bff', // Cor da mensagem
    },
});
