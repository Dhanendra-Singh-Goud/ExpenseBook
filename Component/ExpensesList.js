import { View, Text , FlatList} from 'react-native'
import React from 'react'
import ExpensesItems from './ExpensesItems';


function renderExpenseItem(itemData){
  return <ExpensesItems {...itemData.item}/>
}

function ExpensesList({expenses}) {
  return (
<FlatList data={expenses}
renderItem={renderExpenseItem}
keyExtractor={(item)=>item.id}/>
  )
}
export default ExpensesList;