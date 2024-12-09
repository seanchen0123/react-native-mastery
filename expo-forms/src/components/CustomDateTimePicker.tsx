import { useState } from 'react'
import { useController } from 'react-hook-form'
import { Button, StyleSheet, Text, View } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

type CustomDateTimePicker = {
  name: string
  label?: string
}

export default function CustomDateTimePicker({ name, label }: CustomDateTimePicker) {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false)
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name })

  const showDatePicker = () => {
    setDatePickerVisible(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisible(false)
  }

  const handleConfirm = (date: Date) => {
    onChange(date)
    hideDatePicker()
  }

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <Text style={[styles.dateTime, {borderColor: error ? 'crimson' : 'gainsboro'}]} onPress={showDatePicker}>
        {value ? (
          <Text style={{ color: '#333' }}>{value.toLocaleDateString()}</Text>
        ) : (
          <Text style={{ color: 'lightgray' }}>Select Date</Text>
        )}
      </Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
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
  dateTime: {
    marginTop: 4,
    marginBottom: 2,
    padding: 10,
    borderWidth: 1,
    borderRadius: 6
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
