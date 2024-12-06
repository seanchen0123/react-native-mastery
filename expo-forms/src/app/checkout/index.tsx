import { Redirect } from "expo-router";

export default function InitCheckoutForm() {
  return (
    <Redirect href={"/checkout/personal"} />
  )
}