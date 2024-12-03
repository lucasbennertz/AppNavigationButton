import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Contêiner para gerenciar a navegação
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Navegação inferior
import Icon from 'react-native-vector-icons/Ionicons'; // Ícones para as abas

import Inicio from './screens/inicio'; // Tela Inicial
import Sobre from './screens/Sobre'; // Tela Sobre
import Cliente from './screens/Cliente'; // Tela Cliente

const Tab = createBottomTabNavigator(); // Criação do navegador de abas

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#007aff' }, // Estilo do cabeçalho
          headerTintColor: '#fff', // Cor do texto no cabeçalho
          tabBarStyle: { backgroundColor: '#f8f8f8' }, // Estilo da barra inferior
          tabBarActiveTintColor: '#007aff', // Cor da aba ativa
          tabBarInactiveTintColor: '#8e8e93', // Cor das abas inativas

          // Ícones dinâmicos para as abas
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Inicio') iconName = 'home-outline';
            else if (route.name === 'Sobre') iconName = 'information-circle-outline';
            else if (route.name === 'Cliente') iconName = 'people-outline';
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio" component={Inicio} options={{ title: 'Início' }} />
        <Tab.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre' }} />
        <Tab.Screen name="Cliente" component={Cliente} options={{ title: 'Cliente' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
