import { Button, FlatList, KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import { useWorkouts } from '../../store'
import { Redirect, Stack } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import WorkoutExerciseItem from '../../components/logger/WorkoutExerciseItem'
import WorkoutHeader from '../../components/logger/WorkoutHeader'
import SelectExerciseModal from '../../components/logger/SelectExerciseModal'

export default function CurrenWorkoutScreen() {
  const currentWorkout = useWorkouts(state => state.currentWorkout)
  const finishWorkout = useWorkouts(state => state.finishWorkout)
  const addExercise = useWorkouts(state => state.addExercise)

  if (!currentWorkout) {
    return (
      <View className="flex-1 bg-zinc-950">
        <Redirect href={'/'} />
      </View>
    )
  }

  return (
    <View className="bg-zinc-950 flex-1">
      <Stack.Screen
        options={{
          title: 'Workout Detail',
          headerBackButtonDisplayMode: 'minimal'
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
        keyboardVerticalOffset={60}
      >
        <FlatList
          data={currentWorkout.exercises}
          contentContainerStyle={{ gap: 10, padding: 10 }}
          renderItem={({item}) => <WorkoutExerciseItem exercise={item} />}
          ListHeaderComponent={() => (
            <WorkoutHeader
              headerRight={() => <CustomButton title="Finish" className="px-3 py-1" onPress={() => finishWorkout()} />}
            />
          )}
          ListFooterComponent={() => <SelectExerciseModal onSelectExercise={(name) => addExercise(name)} />}
        />
      </KeyboardAvoidingView>
    </View>
  )
}
