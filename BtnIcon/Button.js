// import { View, Text, Pressable,StyleSheet } from 'react-native'
// import React from 'react'

// function Button({Children, onPress, mode , style}) {
//   return (
//     <View style={style}>
//       <Pressable 
//       onPress={onPress}
//       android_ripple={{color:'#a9a9a9'}}
//       style={({ Pressed }) => (Pressed && styles.Pressed)}
//     >
//         <View style={[styles.Container 
//           ,mode === 'flat' && styles.flat
//           ]}>
//             <Text style={[styles.buttonText
//               , mode === 'flat' && styles.flatText
//               ]}>{Children}</Text>
//         </View>
//       </Pressable>
//     </View>
//   )
// }
// export default Button ;

// const styles = StyleSheet.create({
//     Container:{
//       borderRadius:6,
//       padding:8,
//       backgroundColor:'#800000'
//     },
//     flat:{
//         backgroundColor:'transparent'
//     },
//     buttonText:{
//         color:'white',
//         textAlign:'center',
//     },
//     flatText:{
//         color:'#db7093',
//     },
//     Pressed:{
//         opacity:0.75,
//         backgroundColor:'#dda0dd',
//         borderRadius:4
//     }
// })

import { Pressable, StyleSheet, Text, View } from 'react-native';

function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#800000',
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color:'#db7093',
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: '#dda0dd',
    borderRadius: 4,
  },
});