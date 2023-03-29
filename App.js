import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';

import ManageAllExpences from './Screen/ManageAllExpences';
import RecentExpences from './Screen/RecentExpences';
import AllExpences from './Screen/AllExpences';
import Iconionic from './BtnIcon/Iconionic';
import ExpensesContextProvider from './Store/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return(
 <>
 <StatusBar style='Dark'/>
 <ExpensesContextProvider>
 <NavigationContainer>
  <Stack.Navigator initialRouteName="Home" 
  screenOptions={{
    headerStyle:{backgroundColor:'#663399'},
    headerTintColor:'white',
  }}>
    <Stack.Screen name = "ExpensesOverView" component={ExpensesOverView} options={{headerShown:false}} />
    <Stack.Screen name = "ManageAllExpences" component={ManageAllExpences}
    options={{
      presentation:'containedModal'
    }} />
  </Stack.Navigator>
 </NavigationContainer>
 </ExpensesContextProvider>
 </>
  )
}
function ExpensesOverView(){
  return(
  <BottomTab.Navigator 
  screenOptions={({ navigation}) =>({
    headerStyle:{backgroundColor:'#663399'},
    headerTintColor:'white',
    tabBarActiveTintColor:'yellow',
    tabBarStyle:{backgroundColor:'#663399'},
    headerRight:({tintColor})=> (
       <Iconionic icon = 'add' 
       size = {24}
        color = {tintColor}
         onPress = {()=>{navigation.navigate('ManageAllExpences')
        }}
        />
        ),
  })} >
    <BottomTab.Screen name = 'RecentExpenses' component={RecentExpences}
    options={{
      title:'Recent Expenses',
      tabBarLabel:'Recent',
      tabBarIcon:({size,color})=>(
        <Ionicons name='hourglass' size={size} color={color}/>
      )
    }}/>
    <BottomTab.Screen name = 'AllExpenses' component = {AllExpences}
    options={{
      title:'All Expenses',
      tabBarLabel:'All Expenses',
      tabBarIcon:({size,color})=>(
        <Ionicons name='calendar' size={size} color={color}/>
      )
    }}/>
  </BottomTab.Navigator>
  )
}

