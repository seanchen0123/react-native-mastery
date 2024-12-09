import { ComponentProps } from 'react'
import { useController } from 'react-hook-form'
import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'

type CustomTextInput = { label?: string; containerStyle?: StyleProp<ViewStyle>; name: string } & ComponentProps<
  typeof TextInput
>

export default function CustomTextInput({ label, containerStyle, name, ...textInputProps }: CustomTextInput) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error }
  } = useController({ name })

  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...textInputProps}
        value={value}
        onBlur={onBlur}
        onChangeText={onChange}
        style={[styles.input, textInputProps.style, error ? styles.errorInput : {}]}
      />
      {error && error.message && (
        <Text style={styles.error} numberOfLines={1}>
          {error.message}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 4,
    marginBottom: 2,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gainsboro',
    borderRadius: 6
  },
  errorInput: {
    borderColor: 'crimson'
  },
  label: {
    fontWeight: '600',
    color: 'dimgray'
  },
  error: {
    color: 'crimson',
    height: 16
  }
})
