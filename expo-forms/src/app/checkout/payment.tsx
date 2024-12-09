import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import CustomTextInput from '../../components/CustomTextInput'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PaymentInfo, PaymentInfoSchema, useCheckoutContext } from '../context/CheckoutFormProvider'
import CustomCheckbox from '../../components/CustomCheckbox'
import CustomSwitch from '../../components/CustomSwitch'


export default function PaymentDetailForm() {
  const { paymentInfo, setPaymentInfo } = useCheckoutContext()

  const form = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
    defaultValues: paymentInfo
  })


  const onNext: SubmitHandler<PaymentInfo> = (data) => {
    setPaymentInfo(data)
    router.push('/checkout/confirm')
  }

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput name="cardNumber" label="Card number" placeholder="1234112341234" inputMode="numeric" />
        <View style={{ flexDirection: 'row', gap: 6 }}>
          <CustomTextInput name="expireDate" label="Expire date" placeholder="01/23" containerStyle={{ flex: 1 }} />
          <CustomTextInput name="cvv" label="cvv" placeholder="123" inputMode="numeric" containerStyle={{ flex: 1 }} />
        </View>
        <CustomCheckbox name="saveCard" label="Save credit card" />
        <CustomSwitch name='switchValue' label='On or off?' />
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
