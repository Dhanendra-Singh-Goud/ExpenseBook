import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

// const Dummy_Expenses=[
//     {
//      id:'e1',
//      description:"A pair of cloths",
//      amount:69.65,
//      date:new Date('2023-03-15')
//     },
//     {
//      id:'e2',
//      description:"some Vegetables",
//      amount:29.65,
//      date:new Date('2023-03-10')
//     },
//     {
//      id:'e3',
//      description:"House Rent",
//      amount:269,
//      date:new Date('2023-03-1')
//     },
//     {
//      id:'e4',
//      description:"Electricity Bill",
//      amount:35.23,
//      date:new Date('2023-02-25')
//     },
//     {
//      id:'e5',
//      description:"Celebrate a Event",
//      amount:40.12,
//      date:new Date('2023-03-12')
//     },
//     {
//      id:'e6',
//      description:"Accessories",
//      amount:32.98,
//      date:new Date('2023-03-08')
//     },
//     {
//      id:'e7',
//      description:"Buy Cell Phone",
//      amount:399.50,
//      date:new Date('2023-03-18')
//     },
// ]



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