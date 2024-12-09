import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import CustomTextInput from '../../components/CustomTextInput'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const PaymentInfoSchema = z.object({
  cardNumber: z.string().trim().min(1, { message: 'Card number is required' }),
  expireDate: z
    .string({ message: 'Expire date is required' })
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Please use the MM/YY format'),
  cvv: z.coerce.number().min(100).max(999)
})

type PaymentInfo = z.infer<typeof PaymentInfoSchema>

export default function PaymentDetailForm() {
  const form = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema)
  })

  const onNext: SubmitHandler<PaymentInfo> = () => {
    router.push('/checkout/confirm')
  }

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput name="cardNumber" label="Card number" placeholder="1234112341234" />
        <View style={{ flexDirection: 'row', gap: 6 }}>
          <CustomTextInput name="expireDate" label="Expire date" placeholder="01/23" containerStyle={{ flex: 1 }} />
          <CustomTextInput name="cvv" label="cvv" placeholder="123" inputMode="numeric" containerStyle={{ flex: 1 }} />
        </View>
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
