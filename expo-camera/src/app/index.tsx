import { Link } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <Link href={'/image/image-1'}>image-1</Link>
      <Link href={'/image/image-2'}>image-2</Link>
      <Link href={'/image/image-3'}>image-3</Link>

      <Link href={'/camera'} asChild>
        <Pressable style={styles.floatingButton}>
          <MaterialIcons name="photo-camera" size={30} color={'white'} />
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  floatingButton: {
    backgroundColor: 'royalblue',
    padding: 14,
    borderRadius: 50,
    position: 'absolute',
    bottom: 16,
    right: 16
  }
})
