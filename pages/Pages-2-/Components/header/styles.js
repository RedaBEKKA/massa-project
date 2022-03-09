import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/theme';
// color1:"#FBF6F3",
// color2:"#85A2B9",
// color3:"#97C9B0",
const styles = StyleSheet.create({
  header: {
    width:'100%',
    backgroundColor:COLORS.color1,
    height:"10%",
    borderBottomColor:COLORS.color1,
    borderBottomWidth: 1,
    flexDirection:'row',
    marginBottom:15,
    alignItems:"center",
    paddingHorizontal:10
  },
  image:{
    width:"100%",
    height:'100%'
  },
  logo:{
    width:35,
    height:25,
    
  },
  Text:{
    color:COLORS.black,
    fontSize:18,
    fontWeight:"700",
    paddingLeft:20
  }
});
export default styles;
