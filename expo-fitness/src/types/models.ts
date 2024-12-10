export type Workout = {
  id: string
  createAt: Date
  finishedAt: Date | null
}

export type Exercie = {
  id: string
  workoutId: string
  name: string
}

export type ExercieSet = {
  id: string
  workoutId: string
  reps?: number
  weight?: number
  oneRM?: number
}

export type ExercieWithSets = Exercie & {
  sets: ExercieSet[]
}

export type WorkoutWithExercises = Workout & {
  exercises: ExercieWithSets[]
}