import { useState } from 'react'
import { Modal, Pressable, Text, TouchableHighlight, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome6 } from '@expo/vector-icons'
import CustomButton from '../CustomButton'

type SelectExerciseModalProps = {
  onSelectExercise?: (name: string) => void
}

export default function SelectExerciseModal({ onSelectExercise }: SelectExerciseModalProps) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <SafeAreaView className="mt-8 bg-zinc-900 flex-1 rounded-sm" edges={['top']}>
          <View className="pr-4 flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-teal-400 p-4">Select Exercise</Text>
            <FontAwesome6
              name="window-close"
              size={22}
              color="#ddd"
              onPress={() => {
                setModalVisible(false)
              }}
            />
          </View>
          <View className="p-2">
            {[...Array(3)].map((_, index) => (
              <Pressable
                className='mb-2'
                key={index}
                onPress={() => {
                  onSelectExercise && onSelectExercise(`${index}Squats`)
                  setModalVisible(false)
                }}
              >
                <View className="p-2 bg-zinc-800 border-l-4 border-teal-400 rounded-sm">
                  <Text className="text-xl font-semibold text-white">{`${index}Squats`}</Text>
                  <Text className="text-zinc-500">Back</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </SafeAreaView>
      </Modal>
      <CustomButton
        title="Select Exercise"
        onPress={() => {
          setModalVisible(true)
        }}
      />
    </View>
  )
}
