import { PropsWithChildren, useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import questions from '../questions'
import { Question } from '../types'
import AsyncStorage from '@react-native-async-storage/async-storage'

type QuizContext = {
  question?: Question
  questionIndex: number
  onNext: () => void
  selectedOption?: string
  setSelectedOption: (option: string) => void
  score: number
  bestScore: number
  totalQuestion: number
}

export const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  onNext: () => {},
  setSelectedOption: () => {},
  score: 0,
  bestScore: 0,
  totalQuestion: 0
})

export default function QuizProvider({ children }: PropsWithChildren) {
  const [questionIndex, setQuestionIndex] = useState(0)
  const question = questions[questionIndex]

  const [selectedOption, setSelectedOption] = useState<string | undefined>()
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const isFinished = questionIndex >= questions.length

  useEffect(() => {
    loadBestScore()
  }, [])
  
  useEffect(() => {
    if (isFinished && score > bestScore) {
      setBestScore(score)
      saveBestScore(score)
    }
  }, [isFinished])

  const restart = () => {
    setQuestionIndex(0)
    setSelectedOption(undefined)
    setScore(0)
  }

  const onNext = () => {
    if (isFinished) {
      restart()
      return
    }
    // check if answer is correct
    if (selectedOption === question.correctAnswer) {
      setScore(prev => prev + 1)
    }
    setQuestionIndex(prev => prev + 1)
  }

  const saveBestScore = async (val: number) => {
    try {
      await AsyncStorage.setItem('bestScore', val.toString())
    } catch (error) {
      console.log('save best score error', error)
    }
  }

  const loadBestScore = async () => {
    try {
      const bestScore = await AsyncStorage.getItem('bestScore')
      if (bestScore !== null) {
        setBestScore(parseInt(bestScore))
      }
    } catch (error) {
      console.log('load best score error', error)
    }
  }

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNext,
        selectedOption,
        setSelectedOption,
        score,
        bestScore,
        totalQuestion: questions.length
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export const useQuizContext = () => {
  return useContext(QuizContext)
}
