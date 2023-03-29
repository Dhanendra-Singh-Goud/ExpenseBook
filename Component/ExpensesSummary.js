import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

function ExpensesSummary({ expenses,periodName}) {
    const expenseSum = expenses.reduce((sum, expense)=>{
        return sum + expense.amount
    }, 0)
  return (
    <View style={styles.container}>
      <Text style = {styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
    </View>
  )
}
export default ExpensesSummary;
 const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    padding:8,
    backgroundColor:'#dcdcdc',
    justifyContent:'space-between',
  },
  period:{
    fontSize:15,
    color:'#4b0082',
    fontWeight:'bold'
  },
  sum:{
    fontWeight:'bold',
    color:'#000080',
    fontSize:15
  }
 })