import { ComponentProps } from 'react'
import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'

type CustomTextInput = { label?: string; containerStyle?: StyleProp<ViewStyle> } & ComponentProps<typeof TextInput>

export default function CustomTextInput({ label, containerStyle, ...textInputProps }: CustomTextInput) {
  const error: {message: string} = { message: '' } 

  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput {...textInputProps} style={[styles.input, textInputProps.style, error ? styles.errorInput : {}]} />
      {error && error.message && <Text style={styles.error} numberOfLines={1}>{error.message}</Text>}
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
