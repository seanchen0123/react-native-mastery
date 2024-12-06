import { Link, router, Stack, useLocalSearchParams } from 'expo-router'
import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import * as FileSystem from 'expo-file-system'
import { MaterialIcons } from '@expo/vector-icons'
import { getMediaType } from '../../utils/media'
import { ResizeMode, Video } from 'expo-av'
import { VideoView, useVideoPlayer } from 'expo-video'
import * as MediaLibrary from 'expo-media-library'

export default function ImageScreen() {
  const { name } = useLocalSearchParams()
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions()

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

  const onSave = async () => {
    try {
      // 权限检查
      const { status } = await MediaLibrary.requestPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert('需要权限', '保存图片需要访问相册权限', [{ text: '确定' }])
        return null
      }
      const asset = await MediaLibrary.createAssetAsync(fullUri)
      if (asset) {
        Alert.alert('成功', '图片已保存到相册')
      }
    } catch (error) {
      console.error('保存图片失败:', error)
    }
  }

  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Media'
        }}
      />
      {type === 'image' && <Image source={{ uri: fullUri }} style={{ width: '100%', height: '100%' }} />}
      {type === 'video' && <VideoView player={player} style={{ width: '100%', height: '100%' }} contentFit="cover" />}
      <View style={styles.btnArea}>
        <MaterialIcons name="delete" size={30} color={'#fb7185'} onPress={onDelete} />
        <MaterialIcons name="save" size={30} color={'#60a5fa'} onPress={onSave} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btnArea: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)'
  }
})
