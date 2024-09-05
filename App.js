import { StatusBar } from "expo-status-bar";
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "./data/dummy-data";
import CategoriesScreen from "./Screen/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./Screen/MealsOverViewScreen";
import SingleMealDetailScreen from "./Screen/SingleMealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  //screenOption will apply to all screen and still single screen style will win if we try overwritting those
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
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Meal Category",
              // headerStyle: { backgroundColor: "#351401" },
              // headerTintColor: "white",
              // contentStyle: { backgroundColor: "#3f2f25" },
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverViewScreen}
            // options={({route,navigation})=>{
            // const catID=route.params.categoryId;
            // return {
            //   title:catID
            // }
            // }}
          />
         <Stack.Screen
         name="SingleMealDetails"
         component={SingleMealDetailScreen}
         options={{
          title:"Meal Detail"
         }}
         />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
