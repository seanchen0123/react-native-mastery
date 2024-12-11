import { Stack, useLocalSearchParams } from 'expo-router'
import { View, Text, FlatList } from 'react-native'
import dayjs from 'dayjs'
import { useWorkouts } from '../../store'
import WorkoutExerciseDetailItem from '../../components/logger/WorkoutExerciseDetailItem'

export default function WorkoutScreen() {
  const { id } = useLocalSearchParams()
  const workouts = useWorkouts(state => state.workouts)
  const workout = workouts.find(workout => workout.id === id)

  if (!workout) {
    return (
      <View className=" bg-zinc-950 flex-1 justify-center items-center">
        <Text className=" text-xl text-white">workout not found</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 bg-zinc-950">
      <Stack.Screen options={{ title: 'Workout Detail', headerBackButtonDisplayMode: 'minimal' }} />
      <FlatList
        data={workout.exercises}
        contentContainerStyle={{ padding: 8, gap: 8 }}
        renderItem={({ item }) => <WorkoutExerciseDetailItem exercise={item} />}
        ListHeaderComponent={() => (
          <>
            <Text className="text-3xl text-white font-bold">Workout Detail</Text>
            <Text className="mt-2 text-white">{dayjs(workout.createAt).format('HH:mm dddd, D MM')}</Text>
          </>
        )}
      />
    </View>
  )
}
