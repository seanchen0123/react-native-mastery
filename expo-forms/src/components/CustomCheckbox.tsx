import Checkbox from 'expo-checkbox'
import { useController } from 'react-hook-form'
import { Text, View } from 'react-native'

type CustomCheckbox = {
  name: string
  label?: string
}

export default function CustomCheckbox({ name, label }: CustomCheckbox) {
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name })

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
        <Checkbox value={value} onValueChange={onChange} />
        <Text style={{}}>{label}</Text>
      </View>
      {error && error.message && (
        <Text
          style={{
            color: 'crimson',
            height: 16
          }}
          numberOfLines={1}
        >
          {error.message}
        </Text>
      )}
    </View>
  )
}
