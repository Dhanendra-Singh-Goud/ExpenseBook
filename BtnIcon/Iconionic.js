// import { View, Text, Pressable, StyleSheet  } from 'react-native'
// import React from 'react'
// // import {Ionicons} from '@expo/vector-icons/Ionicons';
// import { Ionicons } from '@expo/vector-icons';

// function Iconionic({icon, size, color, onPress}) {
//   return (
//     <View style={styles.Container}>
//     <Pressable 
//        onPress={onPress}
//        android_ripple={{ color: '#ccc' }}
//       //  style={({ pressed }) => (pressed ? styles.buttonPressed : null)}>
//        style={({Pressed})=>Pressed && styles.Pressed}> 
//      <View >
//        <Ionicons name = {icon} size={size} color={color}/>
//      </View>
//     </Pressable>
//     </View>
//   )
// }
// export default Iconionic;

// const styles = StyleSheet.create({
//     Container:{
//         padding:6,
//         marginHorizontal:8,
//         marginVertical:2,
//         borderRadius:24,
//     },
//     Pressed:{
//         opacity:0.75,
//     }
// })

import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2
  },
  pressed: {
    opacity: 0.75,
  },
});
