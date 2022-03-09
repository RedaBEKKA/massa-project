import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './styles'
import imageLogo from "../../../../assets/logo_massa.png"
import retrun from "../../../../assets/return.png"
import { TouchableOpacity } from 'react-native'
const HeaderApp = ({goBack}) => {

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.logo} onPress={goBack}>
        <Image source={retrun}  style={styles.image}/>  
      </TouchableOpacity>
      <View style={styles.picProfile}>
          <Text style={styles.Text}>Retour</Text>
      </View>
    </View>
  )
}

export default HeaderApp