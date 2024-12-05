import { PropsWithChildren, useContext, useState } from 'react'
import { createContext } from 'react'
import questions from '../questions'
import { Question } from '../types'

type QuizContext = {
  question?: Question
  questionIndex: number
  onNext: () => void
  selectedOption?: string
  setSelectedOption: (option: string) => void
  score: number
  totalQuestion: number
}

export const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  onNext: () => {},
  setSelectedOption: () => {},
  score: 0,
  totalQuestion: 0
})

export default function QuizProvider({ children }: PropsWithChildren) {
  const [questionIndex, setQuestionIndex] = useState(0)
  const question = questions[questionIndex]

  const [selectedOption, setSelectedOption] = useState<string | undefined>()
  const [score, setScore] = useState(0)
  const isFinished = questionIndex >= questions.length

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

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNext,
        selectedOption,
        setSelectedOption,
        score,
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
