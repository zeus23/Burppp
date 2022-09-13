import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import PizzaNavigator from './screens/PizzaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<TailwindProvider>
				<Stack.Navigator initialRouteName='Home'>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="PizzaMake" options={{ headerShown: false }} component={PizzaNavigator} />
				</Stack.Navigator>
			</TailwindProvider>
		</NavigationContainer>
	);
}

