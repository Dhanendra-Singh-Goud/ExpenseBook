import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import  {getDateFormatted } from '../util/date'
import {useNavigation} from '@react-navigation/native'


function ExpensesItems({id, description, amount, date}) {
  const navigation = useNavigation();

   function expensePressHandler(){
    navigation.navigate('ManageAllExpences',{
      expenseId:id
    })
   }
  return (
    <View style={styles.MainContainer} >
    <Pressable
     onPress = {expensePressHandler} 
    android_ripple={{ color: '#ccc' }}
    style={({ pressed }) => (pressed ? styles.Pressed :null)}
     >
    <View style={styles.container}>
        <View>
          <Text style={[styles.textBar, styles.description]}>{description}</Text>
          <Text style={styles.textBar}>{getDateFormatted(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
            <Text style={styles.amountText}>{amount}</Text>
        </View>
    </View>
    </Pressable>
    </View>
  )
}

export default ExpensesItems;

 const styles = StyleSheet.create({
  Pressed:{
    opacity:0.90
  },
  container:{
    flexDirection:'row',
    backgroundColor:'#9370db',
    justifyContent:'space-between',
    alignItems:'center',
    padding:12,
    borderRadius:8,
   
  },
  MainContainer:{
    marginVertical:8,
    elevation:4,  
    },
    description:{
    fontSize:22,
    fontWeight:'bold',
    color:'#f0f8ff',
    // marginBottom:4
    },
    textBar:{
        // fontSize:12,
        color:'#0000cd',
        // fontWeight:'bold',
    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        borderWidth:1
    },
    amountText:{
        // backgroundColor:'#ba55d3',
        fontWeight:'bold',
        fontSize:17
    }
 })