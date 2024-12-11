import { Text, View } from 'react-native'
import { ExerciseWithSets } from '../../types/models'
import { cn } from '../../lib/utils'
import { useWorkouts } from '../../store'
import { getBestSet } from '../../services/setService'

type WorkoutExerciseDetailItemProps = {
  exercise: ExerciseWithSets
}

export default function WorkoutExerciseDetailItem({ exercise }: WorkoutExerciseDetailItemProps) {
  const bestSet = getBestSet(exercise.sets)

  return (
    <View className="border-l-4 border-teal-400 rounded-sm p-4 bg-zinc-900">
      <Text className=" mb-2 text-lg text-white font-semibold">{exercise.name}</Text>
      <View className="gap-2">
        {exercise.sets.map((set, index) => (
          <View
            key={index}
            className={cn(
              'p-2 flex-row items-center justify-between rounded-sm',
              set.id === bestSet?.id && 'bg-teal-300/30'
            )}
          >
            <View className="flex-row items-center">
              <Text className="px-2 text-zinc-500">{index + 1}</Text>
              <Text className="text-white">{`${set?.weight}kg x ${set?.reps}`}</Text>
            </View>
            <View>
              <Text className="text-white">{set.oneRM ? `1RM: ${set.oneRM.toFixed(2)}kg` : 'N/A'}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}
