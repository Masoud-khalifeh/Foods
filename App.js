import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Categories from './Screens/Categories';
import SingleCategory from './Screens/SingleCategory'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name='SingleCategory' component={SingleCategory} options={({ route }) => ({ title: route.params?.title || "Details" })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




