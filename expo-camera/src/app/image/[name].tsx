import { Link, router, Stack, useLocalSearchParams } from 'expo-router'
import { Image, Text, View } from 'react-native'
import * as FileSystem from 'expo-file-system'
import { MaterialIcons } from '@expo/vector-icons'
import { getMediaType } from '../../utils/media'
import { ResizeMode, Video } from 'expo-av'

export default function ImageScreen() {
  const { name } = useLocalSearchParams()

  const fullUri = (FileSystem.documentDirectory || '') + (name || '')
  const type = getMediaType(fullUri)

  const onDelete = async () => {
    await FileSystem.deleteAsync(fullUri)
    router.back()
  }

  const onSave = async () => {}

  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Media',
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: 6 }}>
              <MaterialIcons name="delete" size={26} color={'crimson'} onPress={onDelete} />
              <MaterialIcons name="save" size={26} color={'dimgray'} onPress={onSave} />
            </View>
          )
        }}
      />
      {type === 'image' && <Image source={{ uri: fullUri }} style={{ width: '100%', height: '100%' }} />}
      {type === 'video' && (
        <Video
          source={{ uri: fullUri }}
          style={{ width: '100%', height: '100%' }}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isLooping
        />
      )}
    </View>
  )
}
