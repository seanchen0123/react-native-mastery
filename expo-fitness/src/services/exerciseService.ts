import { ExerciseWithSets } from '../types/models'
import { getSetTotalWeight } from './setService'
import * as Crypto from 'expo-crypto'

export const getExerciseTotalWeight = (exercise: ExerciseWithSets) => {
  return exercise.sets.reduce((totalSetwWeight, set) => totalSetwWeight + getSetTotalWeight(set), 0)
}

export const createExercise = (name: string, workoutId: string) => {
  const newExercise: ExerciseWithSets = {
    id: Crypto.randomUUID(),
    name,
    workoutId,
    sets: [
      { id: Crypto.randomUUID(), exerciseId: 'e1', weight: 20, reps: 5, oneRM: 0 },
      { id: Crypto.randomUUID(), exerciseId: 'e2', weight: 10, reps: 10, oneRM: 0 },
    ]
  }
  return newExercise
}
