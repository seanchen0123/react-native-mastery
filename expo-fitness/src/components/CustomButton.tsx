import { Pressable, Text, View, StyleProp, ViewStyle, TextStyle } from 'react-native'
import { ReactNode, ComponentProps, forwardRef } from 'react'
import { cn } from '../lib/utils'

type CustomButtonProps = {
  title: string
  rightIcon?: ReactNode
  className?: string
  titleClass?: string
  styles?: StyleProp<ViewStyle & TextStyle>
} & Omit<ComponentProps<typeof Pressable>, 'ref'>

export default forwardRef<any, CustomButtonProps>(function CustomButton(
  { title, rightIcon, className, titleClass, styles, ...pressableProps },
  ref
) {
  return (
    <Pressable
      {...pressableProps}
      ref={ref}
      className={cn('justify-center items-center px-5 py-4 bg-teal-400', className)}
      style={styles}
    >
      <Text className={cn('text-zinc-800 font-semibold text-lg', titleClass)}>{title}</Text>
      <View className=" absolute right-5">{rightIcon}</View>
    </Pressable>
  )
})
