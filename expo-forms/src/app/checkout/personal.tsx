import { StyleSheet, View } from 'react-native'
import { router } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const PersonalInfoSchema = z.object({
  fullName: z.string({ message: 'Full name is required'}).min(3, {message: 'Full name must be at least 3 character long'}).trim(),
  address: z.string({message: 'Please provide your address'}).trim(),
  city: z.string({ message: 'city is required'}).trim(),
  postcode: z.string({message: 'postcode is required'}),
  phone: z.string({ message: 'phone number is required'})
})

type PersonalInfo = z.infer<typeof PersonalInfoSchema>

export default function PersonalDetailForm() {
  const form = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema)
  })

  const onNext: SubmitHandler<PersonalInfo> = data => {
    console.log(data)
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
        <CustomTextInput name="phone" label="Phone number" placeholder="13312345678" />
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
