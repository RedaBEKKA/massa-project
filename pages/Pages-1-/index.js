import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderApp from './components/header';
import ItemCard from './components/Item-card';
import ItemCardAtelier from './components/Item-card-Atelier';
import Footer from './components/Footer';
const Atelier = ({navigation}) => {
  return (
    <View style={styles.Atelier}>
      <HeaderApp />
      <View style={styles.Body}>
        <ItemCard title="trails" navigation={navigation} />
        <ItemCard title="Ateliers" navigation={navigation} />
      </View>
      <Footer />
    </View>
  );
};

export default Atelier;
