import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function KeyboardAwareScrollView({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={110}
      style={{ backgroundColor: 'white', flex: 1 }}
    >
      <ScrollView
        style={{ backgroundColor: 'white' }}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView edges={['bottom']} style={{ gap: 6, flex: 1 }}>
          {children}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10
  }
})
