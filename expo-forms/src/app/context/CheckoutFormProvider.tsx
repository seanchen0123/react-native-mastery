import { createContext, PropsWithChildren, useContext, useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { router } from 'expo-router'

export const PersonalInfoSchema = z.object({
  fullName: z
    .string({ message: 'Full name is required' })
    .min(3, { message: 'Full name must be at least 3 character long' })
    .trim(),
  address: z.string().trim().min(1, { message: 'Please provide your address' }),
  city: z.string().trim().min(1, { message: 'city is required' }),
  postcode: z.string().min(1, { message: 'postcode is required' }),
  phone: z.string().min(1, { message: 'phone number is required' })
})
export type PersonalInfo = z.infer<typeof PersonalInfoSchema>

export const PaymentInfoSchema = z.object({
  cardNumber: z.string().trim().min(1, { message: 'Card number is required' }),
  expireDate: z
    .string({ message: 'Expire date is required' })
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Please use the MM/YY format'),
  cvv: z.coerce.number().min(100).max(999)
})
export type PaymentInfo = z.infer<typeof PaymentInfoSchema>

type CheckoutFormContext = {
  personalInfo: PersonalInfo | undefined
  setPersonalInfo: (info: PersonalInfo | undefined) => void
  paymentInfo: PaymentInfo | undefined
  setPaymentInfo: (info: PaymentInfo | undefined) => void
  onSubmit: () => void
}

const CheckoutFormContext = createContext<CheckoutFormContext>({
  personalInfo: undefined,
  setPersonalInfo: () => {},
  paymentInfo: undefined,
  setPaymentInfo: () => {},
  onSubmit: () => {}
})

export default function CheckoutFormProvider({ children }: PropsWithChildren) {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | undefined>()
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | undefined>()

  const onSubmit = () => {
    if (!personalInfo || !paymentInfo) {
      console.log('The form is incomplete')
      return 
    }
    // TODO: submit
    setPersonalInfo(undefined)
    setPaymentInfo(undefined)

    router.dismissAll()
    router.back()
  }

  return (
    <CheckoutFormContext.Provider value={{ personalInfo, setPersonalInfo, paymentInfo, setPaymentInfo, onSubmit }}>
      {children}
    </CheckoutFormContext.Provider>
  )
}

export const useCheckoutContext = () => useContext(CheckoutFormContext)
