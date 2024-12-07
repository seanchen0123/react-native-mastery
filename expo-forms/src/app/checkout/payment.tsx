import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'

export default function PaymentDetailForm() {
  const onNext = () => {
    router.push('/checkout/confirm')
  }

  return (
    <KeyboardAwareScrollView>
      <Text>Payment details</Text>
      <CustomButton title="Next" style={styles.button} onPress={onNext} />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 'auto'
  }
})
