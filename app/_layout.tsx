import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"  options={{headerShown: false}}/>
      <Stack.Screen name="screens/LoginScreen"  options={{headerShown: false}}/>
      <Stack.Screen name="screens/SignUpScreen"  options={{headerShown: false}}/>
    </Stack>
  );
}
