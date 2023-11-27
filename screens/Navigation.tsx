import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import ChatScreen from './ChatScreen';
import Home from './Home';
import UpdateProfile from './UpdateProfile';
import AboutUs from './AboutUs';
 

const Stack = createNativeStackNavigator();


const navigation = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName ="LoginScreen">
        <Stack.Screen options={{ title: 'Login Screen' }}name="LoginScreen"  component = {LoginScreen} />
        <Stack.Screen options={{ title: 'Signup Screen' }}name="SignupScreen" component = {SignupScreen} /> 
        <Stack.Screen options={{ title: 'Chat Screen' }}name="ChatScreen" component = {ChatScreen} /> 
        <Stack.Screen options={{ title: 'Home' }}name="Home" component = {Home} /> 
        <Stack.Screen options={{ title: 'Update Profile' }}name="UpdateProfile" component = {UpdateProfile} /> 
        <Stack.Screen options={{ title: 'About Us' }}name="AboutUs" component = {AboutUs} /> 

      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default navigation;