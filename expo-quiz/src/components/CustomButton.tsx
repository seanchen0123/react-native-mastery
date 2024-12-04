import { Pressable, Text, StyleSheet, View } from 'react-native'
import { ReactNode, ComponentProps } from 'react'

type CustomButton = {
  title: string
  rightIcon?: ReactNode
} & ComponentProps<typeof Pressable>

export default function CustomButton({ title, rightIcon, ...pressableProps }: CustomButton) {
  return (
    <Pressable {...pressableProps} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#005055',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5
  },
  rightIcon: {
    position: 'absolute',
    right: 20
  }
})
