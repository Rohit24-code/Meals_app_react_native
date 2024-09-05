import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import CategoryGridTileComponent from "../components/CategoryGridTileComponent";
import { useNavigation } from "@react-navigation/native";

export default function CategoriesScreen({navigation}) {

//navigation is passed by Default only to the first level under navigator 
// for nested component we can pass or use useNavigation hook
// like let navigation=useNavigation()



function renderCategoryItem(itemData) {
    const handleRedirectToSingleMeal=()=>{
        navigation.navigate("MealsOverview",{
            categoryId:itemData.id
        })
    }

  return <CategoryGridTileComponent title={itemData.title} color={itemData.color} onPress={handleRedirectToSingleMeal}/>;
}



  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(data) => renderCategoryItem(data.item)}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
  },
  box: {
    backgroundColor: "blue",
    color: "#fff",
    padding: 20,
    width: 100,
    height: 100,
    margin: 5,
  },
});
