import {StyleSheet} from 'react-native';
import { COLORS } from '../../../../constants/theme';

const styles = StyleSheet.create({
    CardVedio: {
        width:'98%',
        backgroundColor:COLORS.color1,
        height:'85%',
        borderRadius:5
  },
  video:{
    borderRadius:7,
    overflow:"hidden"
  }
});
export default styles