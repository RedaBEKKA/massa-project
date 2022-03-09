import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles"
import HeaderApp from './Components/header'
import CardVedio from './Components/CardVedio/CardVedio'
const Details = ({navigation}) => {
    const goBack = ()=>{
      navigation.navigate('Atelier')
    }
  return (
    <View style={styles.Atelier}>
      <HeaderApp goBack={goBack} />
      <CardVedio/>
    </View>
  )
}

export default Details