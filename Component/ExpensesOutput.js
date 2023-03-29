import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'


 function ExpensesOutput({expenses, expensesPeriod, fallBackText}) { 
  let content = <Text style = {styles.InfoText}>{fallBackText}</Text>

  if(expenses.length > 0){
    content = <ExpensesList expenses={expenses}/>
  }
  return (
  <View style={styles.container}>
    <ExpensesSummary  expenses={expenses} periodName={expensesPeriod}/>
    {content}
  </View>
  )
}
export default ExpensesOutput ; 

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#191970',
   paddingBottom:0,
   paddingHorizontal:12,
   paddingTop:24,
  },
  InfoText:{
    marginTop:32,
    fontSize:17,
    color:'white',
    padding:12,
    alignItems:'center',
  }
})