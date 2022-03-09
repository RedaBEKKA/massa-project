import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/theme';
// color1:"#FBF6F3",
// color2:"#85A2B9",
// color3:"#97C9B0",
const styles = StyleSheet.create({
  ItemCardAtelier: {
    width:'100%',
    backgroundColor:"#ccc",
    height:"40%",
    borderColor:COLORS.light,
    borderWidth: 1,
    borderRadius:6,
    marginTop:10
  },
  TextAtelier:{
    color:COLORS.color2,
    fontWeight:'700',
    fontSize:18,
    padding:10,
    width:"100%",
  }
});
export default styles;
