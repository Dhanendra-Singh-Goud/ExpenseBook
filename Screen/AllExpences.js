import { View, Text } from 'react-native'
import { useContext } from 'react';
import ExpensesOutput from '../Component/ExpensesOutput';
import { ExpensesContext } from '../Store/expenses-context';

 function AllExpences() {
  const expensesCtx = useContext(ExpensesContext)
  return  <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" fallBackText={'No Expenses Found Overall !!!'}/>
  
  
  
}
export default AllExpences ;