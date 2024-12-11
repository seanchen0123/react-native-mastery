import { Text, View } from 'react-native'
import { WorkoutWithExercises } from '../../types/models'
import { getBestSet, getSetTotalWeight } from '../../services/setService'
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons'

type WorkoutListItemProps = {
  workout: WorkoutWithExercises
}

export default function WorkoutListItem({ workout }: WorkoutListItemProps) {
  const bestSets = workout.exercises.map(item => {
    return getBestSet(item.sets)
  })

  return (
    <View className="border-l-4 border-teal-400 rounded-sm p-4 bg-zinc-900">
      <Text className="text-white">{workout?.createAt.toString()}</Text>
      <View className="mt-3 mb-2 flex-row justify-between items-center">
        <Text className=" text-white font-semibold">Exercise</Text>
        <Text className=" text-white font-semibold">Best set</Text>
      </View>
      {workout?.exercises.map((exercise, index) => (
        <View key={index} className="mb-1 flex-row justify-between items-center">
          <Text className="text-zinc-500">{`${exercise.sets.length} x ${exercise.name}`}</Text>
          <Text className="text-zinc-500">{`${bestSets[index]?.weight}kg x ${bestSets[index]?.reps}`}</Text>
        </View>
      ))}
      <View className="flex-row items-center pt-3 mt-2" style={{ borderTopWidth: 1, borderTopColor: '#333' }}>
        <FontAwesome6 name="clock" size={18} color="#a1a1aa" />
        <Text className="text-zinc-400 ml-2 mr-8">0:00</Text>
        <MaterialCommunityIcons name="weight-kilogram" size={22} color="#a1a1aa" />
        <Text className="text-zinc-400 ml-2">400kg</Text>
      </View>
    </View>
  )
}
