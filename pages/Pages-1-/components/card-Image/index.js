import {View, Text, ImageBackground, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import imageBacgroud from '../../../../assets/blog.jpg';
import imageIcon from '../../../../assets/icon_cards.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Cards = ({title,navigation}) => {
  const [Data, setData] = useState([]);

  const fecthData = async () => {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(dataRes => {
        console.log('Data', dataRes);
        setData(dataRes);
      })
      .catch(err => {
        console.log(`err`, err);
      });
  };

  useEffect(() => {
    if (Data.length === 0) {
      fecthData();
    }
  }, [Data]);


  const goToPage2 = () =>{
    navigation.navigate("Details")
  }
  const Items = ({item}) => {
    return (
      <TouchableOpacity style={styles.Cards} onPress={goToPage2}>
        <ImageBackground source={imageBacgroud} style={styles.Bac}>
          <View style={styles.row}>
            <Image source={imageIcon} />
            <View style={styles.button}>
              <Text style={styles.TextBtn}>Nouveau</Text>
            </View>
          </View>

          <View style={styles.TextBox}>
            <Text style={styles.textTrails}> {title}</Text>
            <Text style={styles.textTrailsIntele}>{item?.item.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.Box}>
      {Data ? (
        <FlatList
          horizontal
          data={Data}
          keyExtractor={item => item.id}
          renderItem={item => {
            return <Items item={item} />;
          }}
        />
      ) : (
        <Text>Chargement ...</Text>
      )}
    </View>
  );
};

export default Cards;
