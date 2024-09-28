import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {  Link} from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HopSpot.</Text>
      <Text style={styles.subtitle}>Sign Up to find the perfect spot for you</Text>

      {/* <TouchableOpacity>
        <Text style={styles.loginLink}>Sign Up</Text>
      </TouchableOpacity> */}

      <TextInput
        style={styles.input}
        placeholder="Enter your email or phone number"
        placeholderTextColor="#A9A9A9"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter at least 8 characters"
        placeholderTextColor="#A9A9A9"
        secureTextEntry={true}
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signButton}>
        <Text style={styles.signButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.signUpText}>
        Already have an account?{' '}
        <Link href="/screens/LoginScreen" style ={styles.signUpLink}>Log In</Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  loginLink: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    color: '#007bff',
    fontSize: 14,
    marginBottom: 20,
  },
  signButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  signButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    fontSize: 14,
    color: '#777',
  },
  signUpLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});
