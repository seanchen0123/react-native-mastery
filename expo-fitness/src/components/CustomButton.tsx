import { Pressable, Text, StyleSheet, View, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import { ReactNode, ComponentProps, forwardRef } from 'react'
import { clsx } from 'clsx'

type CustomButtonProps = {
  title: string
  rightIcon?: ReactNode
  className?: string
  styles?: StyleProp<ViewStyle & TextStyle>
} & Omit<ComponentProps<typeof Pressable>, 'ref'>

export default forwardRef<any, CustomButtonProps>(function CustomButton(
  { title, rightIcon, className, styles, ...pressableProps },
  ref
) {
  return (
    <Pressable
      {...pressableProps}
      ref={ref}
      className={clsx('justify-center items-center', className, 'px-5 py-4 bg-teal-400')}
      style={styles}
    >
      <Text className="text-zinc-800 font-semibold text-lg">{title}</Text>
      <View className=" absolute right-5">{rightIcon}</View>
    </Pressable>
  )
})
