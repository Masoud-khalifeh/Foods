import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { colors } from './data/Colors'
import Categories from './Screens/Categories';
import SingleCategory from './Screens/SingleCategory';
import FoodDetails from './Screens/FoodDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from './Screens/Favorites';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerHandler() {
  return (
    <Drawer.Navigator  screenOptions={{drawerLabelStyle:{fontSize:18},drawerType:"slide",drawerStyle :{backgroundColor:colors.main,},drawerInactiveTintColor:colors.secondary,drawerActiveTintColor:"white",headerTintColor:"white",headerStyle:{backgroundColor:colors.main,}}}>
      <Drawer.Screen name="DrawerCategories" component={Categories} options={{title:"Categories"}}/>
      <Drawer.Screen name="DrawerFavorites" component={Favorites} options={{title:"Favorites"}}/>
    </Drawer.Navigator>

  )

}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.main }, headerTintColor: "white" }} >
        <Stack.Screen name="Categories" component={DrawerHandler} options={{headerShown:false}}/>
        <Stack.Screen name='SingleCategory' component={SingleCategory} options={({ route }) => ({ title: route.params?.title || "Category Details" })} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} options={({ route }) => ({ title: route.params?.title || "Food Details" })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




