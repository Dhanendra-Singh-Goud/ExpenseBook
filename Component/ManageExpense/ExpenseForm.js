import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import Input from './Input';
import { useState } from 'react';
import Button from '../../BtnIcon/Button';
import { getDateFormatted } from '../../util/date';

function ExpenseForm({onCancel,onSubmit, SubmitButtonHandler, defaultValues }) {
const [inputValues, setInputValues ] = useState({
  amount:{value : defaultValues ? defaultValues.amount.toString() : '',
  isValid : !!defaultValues
},
  date : {value : defaultValues ? defaultValues.date.toString().slice(0, 10): '',
  isValid : !!defaultValues
},
  description:{value : defaultValues ? defaultValues.description : '',
  isValid : !!defaultValues
},

})

function InputChangeHandler(Inputidentifier, enteredValue){
  setInputValues ((curInputValues) => {
return{
   ...curInputValues,
   [Inputidentifier]:{value : enteredValue , isValid:true}
};
   });
}
function submitHandler(){
  const expenseData = {
    amount:+inputValues.amount.value,
    date:new Date(inputValues.date.value),
    description:inputValues.description.value
  };

const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
const dateIsValid = expenseData.date.toString()  !== 'Invalid Date' ;
const descriptionIsValid = expenseData.description.trim().length > 0 ;

if(!amountIsValid || !dateIsValid || !descriptionIsValid){

  setInputValues((curInputValues)=>{
    return{
      amount:{value:curInputValues.amount.value, isValid:amountIsValid},
      date:{value:curInputValues.date.value, isValid:dateIsValid},
      description:{value:curInputValues.description.value, isValid:descriptionIsValid},
    }
  })
  return;
}
  onSubmit(expenseData)
}

const formisValid =
 !inputValues.amount.isValid||
 !inputValues.date.isValid||
 !inputValues.description.isValid



  return  (
  <View style={styles.form}>
    <Text style={styles.title}>YOUR EXPENSE</Text>
    <View style={styles.InputRow }>
     <Input
      style = {styles.rowInput}
     Lable = "Amount"
       textInputConfig={{
      keyboardType:'decimal-pad',
      onChangeText:InputChangeHandler.bind(this,'amount'),
      value:inputValues.amount.value
     }}/>
      <Input 
       style = {styles.rowInput}
       Lable = "Date" 
      textInputConfig={{
        maxLength:10,
        placeholder:'YYYY-MM-DD',
        keyboardType:'decimal-pad',
        onChangeText:InputChangeHandler.bind(this,'date'),
      value:inputValues.date.value
      }}/>
     <Input Lable = "Description" 
      textInputConfig={{
         multiline:true,
         autoCorrect:false,
         onChangeText:InputChangeHandler.bind(this,'description'),
      value:inputValues.description.value
      }}/>
      {formisValid && (<Text> Invalid input values - please check your entered value</Text>) }
    </View>
    <View style={styles.buttons}>
      <Button style={styles.button}  mode = 'flat' onPress={onCancel}>Cancel</Button>
      <Button style={styles.button} onPress={submitHandler} >
        {SubmitButtonHandler}
        </Button>
    </View>
    </View>
  )
}
export default ExpenseForm;
const styles = StyleSheet.create({
  InputRow:{
  //    flexDirection:'row',
  //    justifyContent:'space-between'
  },
  // rowInput:{
  //   flex:1
  // }
  form:{
    marginTop:50,
    padding:5
  },
  title:{
    fontSize:26,
    fontWeight:'bold',
    textAlign:'center',
    marginVertical:20,
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    minWidth:120,
    marginHorizontal:6,
    // color:'black'
  },
})
