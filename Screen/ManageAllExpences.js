import { View, Text, StyleSheet } from 'react-native'
import {useLayoutEffect, useContext }from 'react'
import Iconionic from '../BtnIcon/Iconionic'
import { ExpensesContext } from '../Store/expenses-context';
import ExpenseForm from '../Component/ManageExpense/ExpenseForm';
import { storeExpense, updatedExpenses, deleteExpenses } from '../util/http';


 function ManageAllExpences({route, navigation}) {
 const expensesCtx =  useContext(ExpensesContext)

  const editedExpenseId = route.params?.expenseId ;
  const isEditing = !!editedExpenseId;

  const selectedExpenses = expensesCtx.expenses.find(
    (expense)=> expense.id === editedExpenseId
  )

useLayoutEffect(() => {
 navigation.setOptions({
  title:isEditing ? 'Edit Expense' : 'Add expense' ,
 })
}, [navigation,isEditing])

function deletePressHandler(){
  // deleteExpenses(editedExpenseId)
  expensesCtx.deleteExpenses(editedExpenseId)
  navigation.goBack();
}

function cancelHandler(){
  navigation.goBack();
}

 function confirmHandler(expenseData){
  if (isEditing){
    expensesCtx.updateExpenses(
      editedExpenseId,expenseData
    );
  //  updatedExpenses(editedExpenseId, expenseData)
  } else {
     storeExpense(expenseData)
      expensesCtx.addExpenses(expenseData)
    }
  
  navigation.goBack();
}

  return (
  <View style={styles.container}>
    <ExpenseForm
    SubmitButtonHandler={isEditing ? 'Update' : 'Add'}
     onCancel = {cancelHandler}
     onSubmit = {confirmHandler}
     defaultValues = {selectedExpenses} />
    {/* <View style={styles.buttons}>
      <Button style={styles.button}  mode = 'flat' onPress={cancelHandler}>Cancel</Button>
      <Button style={styles.button} onPress={confirmHandler} >{isEditing ? 'Update' : 'Add'}</Button>
    </View> */}
    {isEditing && (
    <View style={styles.deleteConatiner}>
      <Iconionic
       icon = 'trash' 
       size={34} 
       color={'red'} 
       onPress={deletePressHandler}/>
       </View>
       )}
  </View>
  )
}
export default ManageAllExpences ;

const styles = StyleSheet.create({
  deleteConatiner:{
   marginTop:16,
   paddingTop:8,
   borderTopWidth:2,
   borderTopColor:'#191970',
   alignItems:'center',
  },
  container:{
   flex:1,
   padding:24,
   backgroundColor:'#98fb98',
  //  color:'brown'
  },
  // buttons:{
  //   flexDirection:'row',
  //   justifyContent:'center',
  //   alignItems:'center'
  // },
  // button:{
  //   minWidth:120,
  //   marginHorizontal:6,
  //   // color:'black'
  // },

})