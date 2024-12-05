import { Link, useFocusEffect } from 'expo-router'
import { FlatList, Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useCallback, useState } from 'react'
import * as FileSystem from 'expo-file-system'

type Media = {
  name: string
  uri: string
}

export default function HomeScreen() {
  const [images, setImages] = useState<Media[]>([])

  useFocusEffect(
    useCallback(() => {
      loadFiles()
    }, [])
  )

  const loadFiles = async () => {
    if (!FileSystem.documentDirectory) return
    const res = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory)
    setImages(res.map(file => ({ name: file, uri: `${FileSystem.documentDirectory}${file}` })))
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        numColumns={3}
        contentContainerStyle={{ gap: 6, padding: 12 }}
        columnWrapperStyle={{ gap: 6 }}
        renderItem={({ item }) => (
          <Link href={`/image/${item.name}`} asChild>
            <Pressable style={{ flex: 1, maxWidth: '33.33%' }}>
              <Image source={{ uri: item.uri }} style={{ aspectRatio: 3 / 4, borderRadius: 8 }} />
            </Pressable>
          </Link>
        )}
      />

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
    flex: 1
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
