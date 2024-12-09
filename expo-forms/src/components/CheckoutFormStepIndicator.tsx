import { useSegments } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const steps = [
  { key: 'personal', title: 'Personal' },
  { key: 'payment', title: 'Payment' },
  { key: 'confirm', title: 'Confirm' }
]

export default function CheckoutFormStepIndicator() {
  const segments = useSegments()
  const currentScreen = segments[segments.length - 1]

  const stepIndex = steps.findIndex(step => step.key === currentScreen)

  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 80,
        padding: 10,
        gap: 16
      }}
    >
      {steps.map((step, index) => (
        <View
          key={step.key}
          style={{
            borderBottomWidth: 3,
            borderColor: stepIndex >= index ? '#005055' : 'lightgray',
            flex: 1,
            justifyContent: 'center'
          }}
        >
          <Text
            style={{ fontWeight: 'bold', textAlign: 'center', color: stepIndex >= index ? '#005055' : 'gray' }}
          >
            {step.title}
          </Text>
        </View>
      ))}
    </SafeAreaView>
  )
}
