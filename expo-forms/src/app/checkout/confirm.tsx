import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'

export default function ConfirmForm() {
  const onNext = () => {
    router.dismissAll()
    router.back()
  }

  return (
    <View style={styles.container}>
      <Text>Confirm form submission</Text>
      <CustomButton title="Submit" style={styles.button} onPress={onNext} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  button: {
    marginTop: 'auto'
  }
})
