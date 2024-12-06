import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { router } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function PersonalDetailForm() {
  const onNext = () => {
    router.push('/checkout/payment')
  }

  return (
    <ScrollView
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <SafeAreaView edges={['bottom']} style={{gap: 6}}>
        <CustomTextInput label="Full name" placeholder="Joe do" />
        <CustomTextInput label="Address" placeholder="Address" />
        <View style={{ flexDirection: 'row', gap: 6 }}>
          <CustomTextInput label="City" placeholder="Wuhan" containerStyle={{ flex: 1 }} />
          <CustomTextInput label="Post cde" placeholder="420000" containerStyle={{ flex: 1 }} />
        </View>
        <CustomTextInput label="Phone number" placeholder="13312345678" />
        <CustomButton title="Next" style={styles.button} onPress={onNext} />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10
  },
  button: {
    marginTop: 'auto'
  }
})
