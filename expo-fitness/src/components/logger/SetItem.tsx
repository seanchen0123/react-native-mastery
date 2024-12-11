import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ExerciseSet } from '../../types/models'
import { useState } from 'react'
import { useWorkouts } from '../../store'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable'
import Reanimated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated'

type SetItemProps = {
  set: ExerciseSet
  order: number
}

export default function SetItem({ set, order }: SetItemProps) {
  const [weight, setWeight] = useState(set.weight?.toString() || '')
  const [reps, setReps] = useState(set.reps?.toString() || '')

  const updateSet = useWorkouts(state => state.updateSet)
  const deleteSet = useWorkouts(state => state.deleteSet)

  const handleWeightChange = () => {
    updateSet(set.id, { weight: parseFloat(weight) })
  }

  const handleRepsChange = () => {
    updateSet(set.id, { reps: parseInt(reps) })
  }

  function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
    const styleAnimation = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: drag.value }]
      }
    })
  
    return (
      <Reanimated.View className="px-2">
        <TouchableOpacity className="bg-rose-600 rounded-sm items-center" onPress={() => deleteSet(set.id)}>
          <Text className="p-2 text-white  rounded-sm -translate-y-1">Delete</Text>
        </TouchableOpacity>
      </Reanimated.View>
    )
  }

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={RightAction}>
        <View className="flex-row items-center justify-between px-4 bg-zinc-800">
          <Text className="text-white font-semibold">{order}</Text>
          <View className="flex-row gap-3">
            <TextInput
              placeholder="Input"
              inputMode="decimal"
              value={weight}
              onChangeText={setWeight}
              onBlur={handleWeightChange}
              placeholderTextColor={'#666'}
              className=" bg-zinc-700 w-20 rounded-sm py-1 text-center text-white"
            />
            <TextInput
              placeholder="Input"
              inputMode="numeric"
              value={reps}
              onChangeText={setReps}
              onBlur={handleRepsChange}
              placeholderTextColor={'#666'}
              className=" bg-zinc-700 w-20 rounded-sm py-1 text-center text-white"
            />
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  )
}
