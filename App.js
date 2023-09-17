import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {
  HomeScreen,
  LoginScreen,
  RegisterScreen
} from './pages'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Homes" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}} />
        <Stack.Screen name="Register" 
          component={RegisterScreen} 
          options={{headerShown:false}}/>
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}

export default App;
