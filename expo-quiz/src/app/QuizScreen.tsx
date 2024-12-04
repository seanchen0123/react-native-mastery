import { StyleSheet, View, Text, SafeAreaView, Pressable } from 'react-native'
import QuestionCard from '../components/QuestionCard'
import {  FontAwesome6 } from '@expo/vector-icons'

export default function QuizScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>
        <View>
        <QuestionCard />
        <Text style={styles.time}>20 sec</Text>
        </View>
        <Pressable style={styles.button} onPress={() => alert('Button Pressed')}>
          <Text style={styles.buttonText}>Next</Text>
          <FontAwesome6 name="arrow-right-long" size={16} color="white" style={styles.buttonIcon} />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fdfef4',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20
  },
  title: {
    textAlign: 'center',
    color: '#005055',
  },
  time: {
    textAlign: 'center',
    color: '#005055',
    marginTop: 14,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#005055',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5
  },
  buttonIcon: {
    position: 'absolute',
    right: 20
  }
})
