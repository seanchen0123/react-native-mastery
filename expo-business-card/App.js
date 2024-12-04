import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome6 } from '@expo/vector-icons'
import ProjectCard from './components/ProductCard'

export default function App() {
  const onContactMe = () => {
    alert('Contact Me')
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={"bottom"} >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://static.fotor.com.cn/assets/projects/pages/5cbd1070-baed-11e8-abd7-7d5478e2896b_2d360ee3-d89f-4522-949a-76f739b80fb5_thumb.jpg'
              }}
              style={{ width: '100%', aspectRatio: 16 / 9 }}
            />
            <Image
              source={require('./assets/avatar.jpeg')}
              style={{
                width: 150,
                height: 150,
                borderRadius: 150,
                borderWidth: 5,
                borderColor: 'white',
                marginTop: -75
              }}
            />
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Sean Chen</Text>
            <Text>Founder of sc.dev.com</Text>

            <View style={{ flexDirection: 'row', marginVertical: 10, gap: 10 }}>
              <FontAwesome6 name="github" size={24} color="black" />
              <FontAwesome6 name="x-twitter" size={24} color="black" />
              <FontAwesome6 name="at" size={24} color="black" />
            </View>

            <Button title="Contact Me" onPress={onContactMe} />

            <Text style={{ fontSize: 16, paddingHorizontal: 20, lineHeight: 22 }}>
              {'\t'}Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis magnam similique, natus,
              molestias ut sint architecto tempore dolor omnis nesciunt!
            </Text>

            <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 10 }}>Projects</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
            >
              <ProjectCard name="Apple Card" image="https://static.fotor.com.cn/assets/projects/pages/e18f2760-0f26-11e9-b343-f3ec02e45e4b_46555f81-b73c-499b-91cb-53691c9e6d5d_thumb.jpg" />
              <ProjectCard name="Todo app" image="https://static.fotor.com.cn/assets/projects/pages/bcd49250-bb22-11e8-a85e-7f956ad91c0a_a763604e-055b-4d1b-a780-531d17624acf_thumb.jpg" />
              <ProjectCard name="Trello" image="https://tse2-mm.cn.bing.net/th/id/OIP-C.mN4cQEUFFG8vxF3PxcJSogAAAA?rs=1&pid=ImgDetMain" />
              <ProjectCard name="Flappy" image="https://static.fotor.com.cn/assets/projects/pages/8cb6e4c5-f1ca-4dcc-804b-3cf8694b1ce4_6275b860-d501-4eb5-bce5-ce9c0e8e286c_new_thumb.jpg" />
            </ScrollView>
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
