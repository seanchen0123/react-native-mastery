import { CameraCapturedPicture, CameraType, CameraView, useCameraPermissions } from 'expo-camera'
import { Link, router, Stack } from 'expo-router'
import { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import path from 'path'
import * as FileSystem from 'expo-file-system'
import { Video } from 'expo-av'

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions()

  const [facing, setFacing] = useState<CameraType>('back')
  const camera = useRef<CameraView>(null)
  const [picture, setPicture] = useState<CameraCapturedPicture>()
  const [isRecording, setIsRecording] = useState(false)
  const [video, setVideo] = useState<string | undefined>()

  useEffect(() => {
    if (permission && !permission.granted && permission.canAskAgain) {
      requestPermission()
    }
  }, [permission])

  const toggleCameraFacing = () => {
    setFacing(facing === 'back' ? 'front' : 'back')
  }

  const onPress = async () => {
    if (isRecording) {
      camera.current?.stopRecording()
      setIsRecording(false)
    } else {
      takePicture()
    }
  }

  const takePicture = async () => {
    const res = await camera.current?.takePictureAsync()
    // console.log(res)
    setPicture(res)
  }

  const startRecording = async () => {
    setIsRecording(true)
    const res = await camera.current?.recordAsync({ maxDuration: 60 })
    console.log(res)
    setVideo(res?.uri)
    setIsRecording(false)
  }

  const saveFile = async (uri: string | undefined) => {
    if (!uri) return
    const filename = path.parse(uri).base
    await FileSystem.copyAsync({
      from: uri,
      to: `${FileSystem.documentDirectory}${filename}`
    })
    setPicture(undefined)
    setVideo(undefined)
    router.back()
  }

  if (!permission?.granted) {
    return <ActivityIndicator />
  }

  if (picture || video) {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        {picture && <Image source={{ uri: picture.uri }} style={{ width: '100%', flex: 1 }} />}
        {video && <Video source={{ uri: video }} style={{ width: '100%', flex: 1 }} shouldPlay isLooping />}
        <View style={{ padding: 10 }}>
          <SafeAreaView edges={['bottom']}>
            <Button title="Save" onPress={() => saveFile(picture?.uri || video)} />
          </SafeAreaView>
        </View>
        <MaterialIcons
          name="close"
          size={30}
          color={'white'}
          style={styles.close}
          onPress={() => {
            setPicture(undefined)
            setVideo(undefined)
          }}
        />
      </View>
    )
  }

  return (
    <View>
      <CameraView ref={camera} style={styles.camera} facing={facing} mode='video'>
        <View style={styles.footer}>
          <View style={{ width: 50, height: 50 }} />
          <Pressable
            style={[styles.recordButton, { backgroundColor: isRecording ? 'crimson' : 'white' }]}
            onPress={onPress}
            onLongPress={startRecording}
          />
          <MaterialIcons name="flip-camera-ios" size={30} color={'#fff'} onPress={toggleCameraFacing} />
        </View>
      </CameraView>
      <MaterialIcons name="close" color={'#fff'} size={30} style={styles.close} onPress={() => router.back()} />
    </View>
  )
}

const styles = StyleSheet.create({
  camera: {
    width: '100%',
    height: '100%'
  },
  close: {
    position: 'absolute',
    top: 30,
    left: 20
  },
  footer: {
    marginTop: 'auto',
    padding: 20,
    paddingBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  recordButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#fff'
  }
})
