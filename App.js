import "./gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "./data/dummy-data";
import {Ionicons} from "@expo/vector-icons"
import CategoriesScreen from "./Screen/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./Screen/MealsOverViewScreen";
import SingleMealDetailScreen from "./Screen/SingleMealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./Screen/FavoritesScreen";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  //screenOption will apply to all screen and still single screen style will win if we try overwritting those

  function DrawerNavigator() {
    return (
      <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle:{
          backgroundColor:"#3f2f25"
        },
        drawerInactiveTintColor:"white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: '#e4baa1'
      }}
      >
        <Drawer.Screen name="Categories" options={{
          title:"All Categories",
          drawerIcon:({color,size})=><Ionicons color={color} size={size} name="list"/>
        }} component={CategoriesScreen} />
        <Drawer.Screen name="Favorites" 
        options={{
        drawerIcon:({color,size})=><Ionicons color={color} size={size} name="star"/>
        }}
        component={FavoritesScreen} />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              title: "All Categories",
              //over here we have are removing the stack 
              //header because we are nesting drawer 
              // navigators
              headerShown: false
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
          <Stack.Screen
            name="SingleMealDetails"
            component={SingleMealDetailScreen}
            options={{
              title: "Meal Detail",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
