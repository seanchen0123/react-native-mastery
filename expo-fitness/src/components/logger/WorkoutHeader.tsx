import { ReactNode, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useWorkouts } from '../../store'
import { calculateDurationMinutesSeconds } from '../../utils/time'
import { FontAwesome6 } from '@expo/vector-icons'

type WorkoutHeaderProps = {
  headerRight?: () => ReactNode
}

export default function WorkoutHeader({ headerRight }: WorkoutHeaderProps) {
  const [timer, setTimer] = useState('0:00')
  const workout = useWorkouts(state => state.currentWorkout)

  useEffect(() => {
    const interval = setInterval(() => {
      const duration = calculateDurationMinutesSeconds(new Date(workout?.createAt || ''), new Date())
      setTimer(duration)
    }, 1000)
    return () => clearInterval(interval)
  })

  return (
    <View>
      <View className="flex-row justify-between items-center">
        <Text className="text-white font-bold text-3xl mb-2">Workout Tracker</Text>
        {headerRight && headerRight()}
      </View>
      <View className="flex-row items-center">
        <FontAwesome6 name="clock" size={20} color="white" />
        <Text className="text-white ml-1 text-lg">{timer}</Text>
      </View>
    </View>
  )
}
