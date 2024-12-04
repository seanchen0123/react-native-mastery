import { StyleSheet, View, Text, Pressable } from 'react-native'

export default function AnswerOption({
  option,
  isSelected,
  onPress
}: {
  option: string
  isSelected?: boolean
  onPress: (option: string) => void
}) {
  return (
    <Pressable
      onPress={() => onPress(option)}
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
