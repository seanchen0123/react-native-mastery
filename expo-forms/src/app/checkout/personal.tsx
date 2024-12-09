import { StyleSheet, View } from 'react-native'
import { router } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PersonalInfo, PersonalInfoSchema, useCheckoutContext } from '../context/CheckoutFormProvider'

export default function PersonalDetailForm() {

  const { setPersonalInfo, personalInfo } = useCheckoutContext()

  const form = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: personalInfo
  })

  const onNext: SubmitHandler<PersonalInfo> = data => {
    setPersonalInfo(data)
    router.push('/checkout/payment')
  }

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput name="fullName" label="Full name" placeholder="Joe do" />
        <CustomTextInput name="address" label="Address" placeholder="Address" />
        <View style={{ flexDirection: 'row', gap: 6 }}>
          <CustomTextInput name="city" label="City" placeholder="Wuhan" containerStyle={{ flex: 1 }} />
          <CustomTextInput name="postcode" label="Post cde" placeholder="420000" containerStyle={{ flex: 1 }} />
        </View>
        <CustomTextInput name="phone" label="Phone number" inputMode='numeric' placeholder="13312345678" />
        <CustomButton title="Next" style={styles.button} onPress={form.handleSubmit(onNext)} />
      </FormProvider>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 'auto'
  }
})
