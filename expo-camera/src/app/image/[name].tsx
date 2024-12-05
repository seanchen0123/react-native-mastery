import { Link, Stack, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export default function ImageScreen() {
  const { name } = useLocalSearchParams()

  return (
    <View>
      <Stack.Screen options={{ title: 'Image' }} />
      <Text>image details screen for: {name}</Text>
      <Link href="/">Home</Link>
    </View>
  )
}
