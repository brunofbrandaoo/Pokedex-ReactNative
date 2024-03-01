import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './components/List';
import Details from './components/Details';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Pokedex" component={List} />
                <Stack.Screen name="Details" component={Details} options={({ route }) => ({ title: route.params.name })}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


