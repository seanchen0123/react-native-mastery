import { PropsWithChildren, ReactNode } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Card = {
  title: string
}

export default function Card({ title, children }: PropsWithChildren<Card>) {
  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>{title}</Text>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: 'white',
    padding: 20,
    paddingVertical: 40,
    borderRadius: 20,
    gap: 20,
    // shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  question: {
    fontSize: 24,
    fontWeight: '500'
  }
})
