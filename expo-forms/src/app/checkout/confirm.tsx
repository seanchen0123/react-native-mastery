import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'

export default function ConfirmForm() {
  const onNext = () => {
    router.dismissAll()
    router.back()
  }

  return (
    <KeyboardAwareScrollView>
      <Text>Confirm form submission</Text>
      <CustomButton title="Submit" style={styles.button} onPress={onNext} />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 'auto'
  }
})
