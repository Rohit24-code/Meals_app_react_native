import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View,Pressable, Image, StyleSheet } from 'react-native'

export default function MealsItems({itemData}) {
    let naviagtion=useNavigation()
    function handleRedirectToSingleMeal(id){

       naviagtion.navigate("SingleMealDetails",{
        mealId:id
       })
    }
    
  return (
    <View style={styles.mealItem}>
        <Pressable onPress={()=>handleRedirectToSingleMeal(itemData.id)} android_ripple={{color:"#ccc"}}>
            <View>
                <Image source={{uri: itemData.imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{itemData.title}</Text>
            </View>

            <View style={styles.details}>
                <Text style={styles.detailsItem}>{itemData.duration}m</Text>
                <Text style={styles.detailsItem}>{itemData.complexity.toUpperCase()}</Text>
                <Text style={styles.detailsItem}>{itemData.affordability.toUpperCase()}</Text>
            </View>
        </Pressable>

     
    </View>
  )
}

const styles=StyleSheet.create({
    mealItem:{
    margin:16,
    borderRadius:8,
    overflow:'hidden',
    backgroundColor:'white',
    elevation:4
    },
    image:{
        width:"100%",
        height:200
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:8
    },
    detailsItem:{
        marginHorizontal:4,
        fontSize:12
    }
})
