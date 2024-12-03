import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Tela "Inicio" com título e imagem
export default function Inicio() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo à Tela Inicial</Text>
            <Image style={styles.imagem} source={require('../assets/splash_image.png')} />
        </View>
    );
}

// Estilos principais da tela
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#068bff',
    },
    imagem: {
        width: 350,
        height: 350,
    },
});
