import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/theme';
// color1:"#FBF6F3",
// color2:"#85A2B9",
// color3:"#97C9B0",
const styles = StyleSheet.create({
  Footer: {
    width:'100%',
    backgroundColor:"#fff",
    height:"7%",
    alignItems: 'center',
    borderTopWidth: 1,
    paddingTop:15,
    borderTopColor:COLORS.color2
  },
  Text:{
    color:COLORS.color2,
    fontWeight:"600"
  }
});
export default styles;
