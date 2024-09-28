import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';
import { Link, router } from "expo-router";
// const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HopSpot.</Text>
      <Image
        style={styles.image}
        source={require('../assets/images/bunny.png')} // Ensure the path is correct
      />

      <Text style={styles.subtitle}>Let's Get Started</Text>
      <Text style={styles.description}>
        Get ready to find the perfect spot for you.
      </Text>

      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() =>
          router.push({
            pathname: "/screens/SignUpScreen",
            
          })
        }
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>Already have an account?</Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() =>
          router.push({
            pathname: "/screens/LoginScreen",
            
          })
        }
      >
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF007D', // Pink background
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000', // Black text color
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  signUpButton: {
    backgroundColor: '#76CCFF', // Light blue color
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,
  },
  signUpButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  loginText: {
    fontSize: 14,
    color: '#000',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#FFC1D1', // Light pink color
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 5,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});