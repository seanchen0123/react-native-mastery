import { Text, View } from 'react-native'
import { ExercieSet } from '../../types/models'

type SetItemProps = {
  set: ExercieSet
  order: number
}

export default function SetItem({ set, order }: SetItemProps) {
  return (
    <View className="flex-row items-center justify-between px-4">
      <Text className="text-white font-semibold">{order}</Text>
      <View className="flex-row">
        <Text className="w-16 text-center text-white font-semibold">{set.weight}</Text>
        <Text className="w-16 text-center text-white font-semibold">{set.reps}</Text>
      </View>
    </View>
  )
}
