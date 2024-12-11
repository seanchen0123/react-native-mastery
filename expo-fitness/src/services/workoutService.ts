import { WorkoutWithExercises } from '../types/models'
import * as Crypto from 'expo-crypto'
import { cleanExercise, getExerciseTotalWeight } from './exerciseService'

export const getWorkoutTotalWeight = (workout: WorkoutWithExercises) => {
  return workout.exercises.reduce((total, exercise) => total + getExerciseTotalWeight(exercise), 0)
}

export const newWorkout = () => {
  const newWorkout: WorkoutWithExercises = {
    id: Crypto.randomUUID(),
    createAt: new Date(),
    finishedAt: null,
    exercises: []
  }
  return newWorkout
}

export const finishWorkout = (workout: WorkoutWithExercises) => {
  const cleanedWorkout = cleanWorkout(workout)

  const finishedWorkout: WorkoutWithExercises = {
    ...cleanedWorkout,
    finishedAt: new Date()
  }
  return finishedWorkout
}

export const cleanWorkout = (workout: WorkoutWithExercises) => {
  const cleanedExercise = workout.exercises.map(cleanExercise).filter(e => e !== null)
  return {
    ...workout,
    exercises: cleanedExercise
  }
}
