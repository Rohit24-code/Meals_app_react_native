import React from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

export default function SingleMealDetailScreen({ route , navigation}) {
  let mealId = route.params.mealId;


  const headerButtonPressHandler=()=>{
    console.log("Press");
    
  }

  useLayoutEffect(()=>{
    //this is to set button on the header of the navigation bar on top
   navigation.setOptions({
    headerRight:()=>{
        return <IconButton title="Tap Me" icon={"star"} color={"white"} onPress={headerButtonPressHandler}/>
    }
   })
  },[navigation,headerButtonPressHandler])

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>

      <View style={styles.details}>
        <Text style={styles.detailsItem}>{selectedMeal.duration}m</Text>
        <Text style={styles.detailsItem}>
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailsItem}>
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Ingredients</Text>
          </View>

          {selectedMeal.ingredients.map((ingridents) => {
            return (
              <View style={styles.listItem}>
                <Text style={styles.itemText} key={ingridents}>
                  {ingridents}
                </Text>
              </View>
            );
          })}

          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Steps</Text>
          </View>

          {selectedMeal.steps.map((step) => {
            return (
              <View style={styles.listItem}>
                <Text style={styles.itemText} key={step}>
                  {step}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#fff",
  },
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    margin: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
    marginBottom:10
  },
});
