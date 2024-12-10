import { create } from 'zustand'
import { WorkoutWithExercises } from '../types/models'
import { finishWorkout, newWorkout } from '../services/workoutService'
import { createExercise } from '../services/exerciseService'

type State = {
  currentWorkout: WorkoutWithExercises | null
  workouts: WorkoutWithExercises[]
}

type Actions = {
  startWorkout: () => void
  finishWorkout: () => void
  addExercise: (name: string) => void
}

export const useWorkouts = create<State & Actions>()((set, get) => ({
  // State
  currentWorkout: null,
  // workout history
  workouts: [],
  // Actions
  startWorkout: () => {
    set({ currentWorkout: newWorkout() })
  },
  finishWorkout: () => {
    const { currentWorkout } = get()
    if (!currentWorkout) {
      return
    }
    const finishedWorkout = finishWorkout(currentWorkout)
    set(state => ({ currentWorkout: null, workouts: [finishedWorkout, ...state.workouts] }))
  },
  addExercise: (name: string) => {
    const { currentWorkout } = get()
    if (!currentWorkout) {
      return
    }
    const newExercise = createExercise(name, currentWorkout.id)
    set(state => ({
      currentWorkout: state.currentWorkout && {
        ...state.currentWorkout,
        exercises: [...state.currentWorkout?.exercises, newExercise]
      }
    }))
  }
}))
