import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#09090b' }, headerTintColor: '#2dd4bf' }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}
