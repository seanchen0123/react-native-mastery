import { Text, View } from "react-native";
import CustomButton from "../CustomButton";

export default function WorkoutExerciseItem() {
  return (
    <View className=" border-l-4 border-teal-400 rounded-sm p-4 bg-zinc-900">
      <Text className="text-white text-xl font-bold">Exercise</Text>
      <CustomButton title="Add set+" />
    </View>
  )
}