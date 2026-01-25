import { View, Text ,ScrollView,  } from 'react-native'
import React, { JSX } from 'react'
import FlatCards from './components/FlatCards'
import ElvatedCards from './components/ElvatedCards'
import TrendingCard from './components/TrendingCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import ActionCard from './components/ActionCard'
import ContactCard from './components/ContactCard'


const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FlatCards />
          <ElvatedCards/>
          <TrendingCard/>
          <ContactCard/>
          <ActionCard/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App