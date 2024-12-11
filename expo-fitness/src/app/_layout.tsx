import { Stack } from 'expo-router'
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#09090b' }, headerTintColor: '#2dd4bf' }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}
