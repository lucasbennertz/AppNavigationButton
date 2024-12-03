import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Tela "Cliente" com título e descrição
export default function Cliente() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela Cliente</Text>
            <Text style={styles.description}>Nessa tela irão ficar algumas informações sobre os clientes de nossa aplicação</Text>
        </View>
    );
}

// Estilos principais da tela
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Cor de fundo
        fontFamily: 'Arimo', // Fonte personalizada
    },
    title: {
        fontSize: 24, // Tamanho do título
        fontWeight: 'bold',
        color: '#068bff', // Cor do título
    },
    description: {
        fontSize: 16, // Tamanho da descrição
        marginTop: 10, // Espaçamento superior
        color: '#068bff', // Cor da descrição
    },
});
