import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Cards from '../card-Image';
const ItemCard = ({title,navigation}) => {
  return (
    <View style={styles.ItemCard}>
      <View style={styles.BoxTitles}>
        <Text style={styles.Text}>{title}</Text>
        <Text style={styles.TextPlus}>Tout voir</Text>
      </View>
      <Cards title={title} navigation={navigation}/>
    </View>
  );
};

export default ItemCard;
