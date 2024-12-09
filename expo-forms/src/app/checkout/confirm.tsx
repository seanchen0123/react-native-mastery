import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import { useCheckoutContext } from '../context/CheckoutFormProvider'

export default function ConfirmForm() {
  const { personalInfo, paymentInfo, onSubmit } = useCheckoutContext()

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        {personalInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Personal</Text>
              <Link href={'/checkout'} style={styles.link}>
                Edit
              </Link>
            </View>
            {Object.entries(personalInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: <Text style={{ color: '#333', fontWeight: '500' }}>{value.toString()}</Text>
              </Text>
            ))}
          </View>
        )}
        {paymentInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Payment</Text>
              <Link href={'/checkout/payment'} style={styles.link}>
                Edit
              </Link>
            </View>
            {Object.entries(paymentInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: <Text style={{ color: '#333', fontWeight: '500' }}>{value.toString()}</Text>
              </Text>
            ))}
          </View>
        )}
      </View>
      <CustomButton title="Submit" style={styles.button} onPress={onSubmit} />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    gap: 10
  },
  dataContainer: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    borderRadius: 10,
    gap: 4
  },
  dataContainerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10
  },
  link: {
    color: '#005055',
    fontWeight: '600',
    backgroundColor: '#99f6e4',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4
  },
  button: {
    marginTop: 'auto'
  }
})
