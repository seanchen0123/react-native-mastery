import { Stack } from "expo-router"
import CheckoutFormProvider from "../context/CheckoutFormProvider"

export default function CheckoutLayout() {
  return (
    <CheckoutFormProvider>
      <Stack>
        <Stack.Screen name="personal" options={{title: 'Personal'}} />
        <Stack.Screen name="payment" options={{title: 'Payment'}} />
        <Stack.Screen name="confirm" options={{title: 'Confirm'}} />
      </Stack>
    </CheckoutFormProvider>
  )
}