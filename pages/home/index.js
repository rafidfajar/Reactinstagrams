import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import {
  PrimaryButton
} from '../../components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

// Buat komponen layar untuk setiap tab
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <PrimaryButton 
            title="logout"
            onPress={() => navigation.push('Login')}
            />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}
function SearchScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  );
}
function AddScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Add Screen</Text>
    </View>
  );
}
function LikeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Add Screen</Text>
    </View>
  );
}

// Buat navigator tab bawah
const Tab = createBottomTabNavigator();

export default function App() {
  return (
  
      <Tab.Navigator    tabBarOptions={{
        showLabel: false, // Hide labels
        tabStyle: {
          justifyContent: 'center', // Center the icons vertically
        },
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}/>
         <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Add" component={AddScreen} options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" color={color} size={size} />
          ),
        }}/>
         <Tab.Screen name="Like" component={LikeScreen} options={{
          tabBarLabel: 'Like',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
  
  );
}
