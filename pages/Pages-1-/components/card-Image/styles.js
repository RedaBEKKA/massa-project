import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/theme';
// color1:"#FBF6F3",
// color2:"#85A2B9",
// color3:"#97C9B0",
const styles = StyleSheet.create({

  Box:{
    width:'100%',
    height:'70%',
    marginTop: 10,
  },  
  Cards: {
    borderRadius: 15,
    marginLeft: 10,
    overflow:'hidden',
    justifyContent: 'space-between',
    width:280
  },
  Bac:{
    justifyContent: 'space-between',
    height:'100%'
  },   
  row:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    padding:10,
    
  } ,   
  TextBox: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  textTrailsIntele: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.light,
  },
  textTrails: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.light,
  },
  button: {
    backgroundColor: COLORS.light,
    height: 30,
    borderRadius: 20,
    width:80,
    justifyContent:'center',
    alignItems:'center'  
  },
  TextBtn: {
    fontSize: 14,
    color: COLORS.color2,
    fontWeight:"600"

  },
});
export default styles;
