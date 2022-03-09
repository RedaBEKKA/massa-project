import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './styles'
import imageLogo from "../../../../assets/logo_massa.png"
import picProfile from "../../../../assets/pic_profile.png"
const HeaderApp = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Image source={imageLogo} />  
      </View>
      <View style={styles.picProfile}>
      <Image source={picProfile} />  
      </View>
    </View>
  )
}

export default HeaderApp