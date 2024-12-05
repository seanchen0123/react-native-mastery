import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useQuizContext } from '../providers/QuizProvider'

export default function AnswerOption({
  option
}: {
  option: string
}) {

  const {selectedOption, setSelectedOption} = useQuizContext()

  const isSelected = selectedOption === option
  
  return (
    <Pressable
      onPress={() => setSelectedOption(option)}
      style={[
        styles.container,
        isSelected
          ? {
              backgroundColor: '#e1f396',
              borderColor: '#e2e496'
            }
          : {
              backgroundColor: '#fff',
              borderColor: 'lightgray'
            }
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 100
  }
})
