import { ComponentProps } from 'react'
import { useController } from 'react-hook-form'
import { Text, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

type CustomePicker = {
  name: string
} & Omit<ComponentProps<typeof RNPickerSelect>, 'onValueChange'>

export default function CustomPicker({ name, ...pickerProps }: CustomePicker) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error }
  } = useController({ name })

  return (
    <View>
      <RNPickerSelect
        {...pickerProps}
        value={value}
        onValueChange={onChange}
        onClose={onBlur}
        style={{
          viewContainer: {
            marginTop: 4,
            marginBottom: 4
          },
          inputIOS: {
            borderColor: error ? 'crimson' : 'gainsboro',
            borderWidth: 1,
            width: '100%',
            padding: 10,
            borderRadius: 6
          },
          inputIOSContainer: { pointerEvents: 'none' },
          chevronUp: {
            display: 'none'
          },
          chevronDown: {
            display: 'none'
          }
        }}
      />
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
