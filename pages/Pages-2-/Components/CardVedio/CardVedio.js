import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import VideoPlayer from 'react-native-video-player'
import imge from '../../../../assets/vedio_img.png'
import video from "../../../../assets/mov_bbb.mp4"
import Video from 'react-native-video'


const CardVedio = () => {
  return (
    <View style={styles.CardVedio}>
      <VideoPlayer 
        autoplay={false}
        video={{url:video}}
        defaultMuted={true}
        videoHeight={1000}
        videoWidth={1500}
        thumbnail={imge}
        style={styles.video}
      />
        {/* <Video 
        autoplay={false}
        video={{url:"https://www.w3schools.com/html/mov_bbb.mp4"}}
        defaultMuted={true}
        videoHeight={1000}
        videoWidth={1500}
        thumbnail={imge}
        style={{flex:1}}
      /> */}
    </View>
  )
}

export default CardVedio