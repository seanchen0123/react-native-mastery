import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'

export default function PersonalDetailForm() {

  const onNext = () => {
    router.push('/checkout/payment')
  }

  return (
    <View style={styles.container}>
      <Text>Personal details</Text>
      <CustomButton title='Next' style={styles.button} onPress={onNext} />
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
