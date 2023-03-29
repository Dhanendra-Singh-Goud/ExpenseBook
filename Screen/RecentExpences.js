import { View, Text } from 'react-native'
import {useContext, useEffect, useState} from 'react'
import ExpensesOutput from '../Component/ExpensesOutput';
import { ExpensesContext } from '../Store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';
// import LoadingOverLayer from '../BtnIcon/LoadingOverLayer';

 function RecentExpences() {
  // const [isFetching, setIsFetching] = useState(true)
  const expenseCtx = useContext(ExpensesContext)
 

 useEffect(() => {
 async function getExpenses(){
  // setIsFetching(true)
   const expenses = await fetchExpenses()
  //  setIsFetching(false);
   expenseCtx.setExpenses(expenses);
 }
 getExpenses()
 }, [])

// if (isFetching){
//   return <LoadingOverLayer/>
// }
  const recentExpenses = expenseCtx.expenses.filter((expense)=>{
    const today = new Date();
    const date7dayago = getDateMinusDays(today,7)

    return (expense.date >= date7dayago) && (expense.date <= today) })
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days"  fallBackText={'No Expenses for last 7 days'}/>
   
}
export default RecentExpences ;