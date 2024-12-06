import { Pressable, Text, StyleSheet, View, StyleProp, ViewStyle } from 'react-native'
import { ReactNode, ComponentProps, forwardRef } from 'react'

type CustomButtonProps = {
  title: string
  rightIcon?: ReactNode
  style?: StyleProp<ViewStyle>
} & Omit<ComponentProps<typeof Pressable>, 'ref'>

export default forwardRef<any, CustomButtonProps>(function CustomButton({ title, rightIcon, style, ...pressableProps }, ref) {
  return (
    <Pressable {...pressableProps} ref={ref} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  )
})

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
