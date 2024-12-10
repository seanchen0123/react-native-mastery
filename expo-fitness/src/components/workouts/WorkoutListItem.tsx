import { Pressable, Text, View } from 'react-native'
import { WorkoutWithExercises } from '../../types/models'
import { Link } from 'expo-router'

type WorkoutListItemProps = {
  workout?: WorkoutWithExercises
}

export default function WorkoutListItem({ workout }: WorkoutListItemProps) {
  return (
    <View className="border-l-4 border-teal-400 rounded-sm p-4 bg-zinc-900">
      <Text className="text-white">{workout?.createAt.toString()}</Text>
    </View>
  )
}
