import {
  StyleSheet,
  View,
} from 'react-native'
import { router } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'

export default function PersonalDetailForm() {
  const onNext = () => {
    router.push('/checkout/payment')
  }

  return (
    <KeyboardAwareScrollView>
      <CustomTextInput label="Full name" placeholder="Joe do" />
      <CustomTextInput label="Address" placeholder="Address" />
      <CustomTextInput label="Address" placeholder="Address" />
      <CustomTextInput label="Address" placeholder="Address" />
      <CustomTextInput label="Address" placeholder="Address" />
      <CustomTextInput label="Address" placeholder="Address" />
      <CustomTextInput label="Address" placeholder="Address" />
      <View style={{ flexDirection: 'row', gap: 6 }}>
        <CustomTextInput
          label="City"
          placeholder="Wuhan"
          containerStyle={{ flex: 1 }}
        />
        <CustomTextInput
          label="Post cde"
          placeholder="420000"
          containerStyle={{ flex: 1 }}
        />
      </View>
      <CustomTextInput label="Phone number" placeholder="13312345678" />
      <CustomButton title="Next" style={styles.button} onPress={onNext} />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 'auto'
  }
})
