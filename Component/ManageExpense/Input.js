import { View, Text , TextInput, StyleSheet} from 'react-native'
import React from 'react'


function Input({ textInputConfig, Lable, style }) {

const InputStyles = [styles.textStyle];

  if(textInputConfig  && textInputConfig.multiline){
    InputStyles.push(styles. inputMultiline)
  }

  return (
    <View style={[styles.InputContanier ,style]}>
      <Text style={styles.label}>{Lable}</Text>
     <TextInput style={styles.textStyle}
     {...textInputConfig}/>
    </View>
  )
}
export default Input;

const styles = StyleSheet.create({
  InputContanier:{
    marginHorizontal:4,
    marginVertical:10,
    // flex:1
  },
  label:{
    fontSize:16,
    fontWeight:'bold',
    marginBottom:4,
    color:'brown',
  },
  textStyle:{
    padding:6,
    color:'white',
    borderRadius:7,
    backgroundColor:'brown',
    borderColor:'white',
    fontSize:18,
  },
  inputMultiline:{
    minHeight:100,
    textAlignVertical:'top',
  }
})