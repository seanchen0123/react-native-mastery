import { Link, router, Stack, useLocalSearchParams } from 'expo-router'
import { Image, Text, View } from 'react-native'
import * as FileSystem from 'expo-file-system'
import { MaterialIcons } from '@expo/vector-icons'
import { getMediaType } from '../../utils/media'
import { ResizeMode, Video } from 'expo-av'
import { VideoView, useVideoPlayer } from 'expo-video'

export default function ImageScreen() {
  const { name } = useLocalSearchParams()

  const fullUri = (FileSystem.documentDirectory || '') + (name || '')
  const type = getMediaType(fullUri)

  const player = useVideoPlayer(fullUri, player => {
    player.loop = true
    player.play()
  })

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
      {type === 'video' && <VideoView player={player} style={{ width: '100%', height: '100%' }} contentFit="cover" />}
    </View>
  )
}
