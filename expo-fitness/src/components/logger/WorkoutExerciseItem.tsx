import { Text, View } from 'react-native'
import CustomButton from '../CustomButton'
import { ExercieWithSets } from '../../types/models'
import SetItem from './SetItem'

type WorkoutExerciseItemProps = {
  exercise: ExercieWithSets
}

export default function WorkoutExerciseItem({ exercise }: WorkoutExerciseItemProps) {
  return (
    <View className=" border-l-4 border-teal-400 rounded-sm px-4 pt-3 bg-zinc-900">
      <Text className="text-white text-xl font-bold">{exercise.name}</Text>
      <View className="flex-row items-center justify-between bg-zinc-800 pt-4 pb-2 px-4">
        <Text className="text-white font-semibold">Set</Text>
        <View className='flex-row'>
          <Text className="w-16 text-center text-white font-semibold">Kg</Text>
          <Text className="w-16 text-center text-white font-semibold">Reps</Text>
        </View>
      </View>
      <View className="py-4 gap-4 bg-zinc-800">
        {exercise.sets.map((item, index) => (
          <SetItem set={item} order={index + 1} key={index} />
        ))}
      </View>
      <CustomButton title="Adding set" className=' bg-transparent' titleClass='text-teal-400' />
    </View>
  )
}
