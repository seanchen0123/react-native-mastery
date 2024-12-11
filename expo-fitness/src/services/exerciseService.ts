import { ExerciseWithSets } from '../types/models'
import { createNewSet, getSetTotalWeight } from './setService'
import * as Crypto from 'expo-crypto'

export const getExerciseTotalWeight = (exercise: ExerciseWithSets) => {
  return exercise.sets.reduce((totalSetwWeight, set) => totalSetwWeight + getSetTotalWeight(set), 0)
}

export const createExercise = (name: string, workoutId: string) => {
  const newExercise: ExerciseWithSets = {
    id: Crypto.randomUUID(),
    name,
    workoutId,
    sets: []
  }
  // add one empty set
  newExercise.sets.push(createNewSet(newExercise.id))
  return newExercise
}
