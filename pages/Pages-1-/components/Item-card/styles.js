import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/theme';
// color1:"#FBF6F3",
// color2:"#85A2B9",
// color3:"#97C9B0",
const styles = StyleSheet.create({
  ItemCard: {
    width:'100%',
    height:"48%",
    borderRadius:6,
    marginBottom:10,
    backgroundColor:"#fff"
  },
  BoxTitles:{
    flexDirection:'row',
    width:"100%",
    justifyContent:'space-between'
  },  
  Text:{
    color:COLORS.color2,
    fontWeight:'700',
    fontSize:18,
    padding:10,
  },
  TextPlus:{
    color:COLORS.color2,
    fontWeight:'600',
    fontSize:13,
    padding:10,
    textDecorationLine:'underline'
  }
});
export default styles;
