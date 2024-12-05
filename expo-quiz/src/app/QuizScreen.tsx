import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import QuestionCard from '../components/QuestionCard'
import questions from '../questions'
import Card from '../components/Card'
import CustomButton from '../components/CustomButton'
import { QuizContext, useQuizContext } from '../providers/QuizProvider'
import { useEffect } from 'react'
import { useTimer } from '../hooks/useTimer'

export default function QuizScreen() {
  const { question, questionIndex, onNext, score, bestScore, totalQuestion } = useQuizContext()

  const { time, startTimer, clearTimer } = useTimer(20)

  useEffect(() => {
    startTimer()
    return () => clearTimer() 
  }, [question])

  useEffect(() => {
    if (time <= 0) {
      onNext()
    }
  })

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>
            Question {questionIndex === questions.length ? questions.length : questionIndex + 1}/{totalQuestion}
          </Text>
        </View>

        {/* Body */}
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>{time} sec</Text>
          </View>
        ) : (
          <Card title="Well done">
            <Text>
              Correct answers: {score}/{totalQuestion}
            </Text>
            <Text>Best score: {bestScore}</Text>
          </Card>
        )}

        {/* Footer */}
        <CustomButton
          title="Next"
          rightIcon={<FontAwesome6 name="arrow-right-long" size={16} color="white" />}
          onPress={onNext}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fdfef4'
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20
  },
  title: {
    textAlign: 'center',
    color: '#005055'
  },
  time: {
    textAlign: 'center',
    color: '#005055',
    marginTop: 14,
    fontWeight: 'bold'
  }
})
