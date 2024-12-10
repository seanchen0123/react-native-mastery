import { FlatList, Pressable, Text, View } from 'react-native'
import '../../global.css'
import { Link, router } from 'expo-router'
import CustomButton from '../components/CustomButton'
import { useWorkouts } from '../store'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import WorkoutListItem from '../components/workouts/WorkoutListItem'

export default function HomeScreen() {
  const currentWorkout = useWorkouts(state => state.currentWorkout)
  const startWorkout = useWorkouts(state => state.startWorkout)
  const workouts = useWorkouts(state => state.workouts)

  const onStartWorkout = () => {
    startWorkout()
    router.push('/workout/current')
  }

  return (
    <View className="flex-1 gap-3 p-3 bg-zinc-950">
      <SafeAreaView>
        {currentWorkout ? (
          <Link href={'/workout/current'} asChild>
            <CustomButton title="Resume workout" />
          </Link>
        ) : (
          <CustomButton title="Start new workout" onPress={onStartWorkout} />
        )}
        <FlatList
          style={{ marginTop: 10 }}
          data={workouts}
          contentContainerStyle={{ gap: 8 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Link href={`/workout/${item?.id}`} asChild>
              <Pressable>
                <WorkoutListItem workout={item} />
              </Pressable>
            </Link>
          )}
        />
      </SafeAreaView>
      <StatusBar style="light" />
    </View>
  )
}
