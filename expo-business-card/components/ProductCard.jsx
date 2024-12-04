import { View, Text, Image, StyleSheet } from 'react-native'

export default function ProjectCard({ name, image }) {
  return (
    <View>
      <Image
        source={{
          uri: image
        }}
        style={styles.image}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    aspectRatio: 16 / 9,
    borderRadius: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    color: 'dimgray'
  }
})
