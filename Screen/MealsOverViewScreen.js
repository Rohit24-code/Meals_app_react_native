import React, { useEffect, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealsItems from "../components/Mealstems";

export default function MealsOverViewScreen({ route, navigation }) {
//    we can also  use this useRoute() if we want that in nested component
    let catId=route.params.categoryId;

    const displayedMeals= MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    function renderMealItem(itemData){
        return <MealsItems itemData={itemData?.item}/>
    }

    useLayoutEffect(()=>{
      const categoryTitle=CATEGORIES.find((category)=>category.id===catId).title
    navigation.setOptions({
      title:categoryTitle
    })
    },[catId,navigation])

   

    return (
    <View style={styles.container}>
      <FlatList
      data={displayedMeals}
      keyExtractor={(item)=>item.id}
      renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
