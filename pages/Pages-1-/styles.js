import {StyleSheet} from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  Atelier: {
    flex:1,
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor:COLORS.color1,

  },
  Body:{
    width:'95%',
    backgroundColor:COLORS.color1,
    height:'80%'
  }
});
export default styles
