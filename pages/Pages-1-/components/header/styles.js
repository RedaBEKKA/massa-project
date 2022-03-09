import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/theme';
// color1:"#FBF6F3",
// color2:"#85A2B9",
// color3:"#97C9B0",
const styles = StyleSheet.create({
  header: {
    width:'100%',
    backgroundColor:COLORS.color1,
    height:"8%",
    borderBottomColor:COLORS.color2,
    borderBottomWidth: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom:20
  },
});
export default styles;
