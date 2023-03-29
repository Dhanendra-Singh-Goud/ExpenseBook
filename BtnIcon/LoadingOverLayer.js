import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

 function LoadingOverLayer() {
  return (
    <View style= {styles.container}>
      <ActivityIndicator size='large' color='green'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        textAlign:'center',
        padding:24,
        backgroundColor:'red'
    }
})

export default LoadingOverLayer