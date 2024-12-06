import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'

export default function PaymentDetailForm() {

  const onNext = () => {
    router.push('/checkout/confirm')
  }

  return (
    <View style={styles.container}>
      <Text>Payment details</Text>
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
