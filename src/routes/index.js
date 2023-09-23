import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import Details from '../screen/Details';

export default function Routes() {

    const stack = createStackNavigator();

    return (
        <NavigationContainer>
            <stack.Navigator>

                <stack.Screen options={{ headerShown: false }} name='home' component={Home} />
                <stack.Screen options={{
                    title: '',
                    headerStyle: {
                        backgroundColor: '#141a29',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} name='details' component={Details} />

            </stack.Navigator>
        </NavigationContainer>
    );
}