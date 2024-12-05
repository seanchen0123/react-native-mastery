import { Stack } from 'expo-router'
import { View } from 'react-native'

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerTintColor: 'royalblue' }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="camera" options={{ headerShown: false }} />
    </Stack>
  )
}
