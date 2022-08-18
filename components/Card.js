import React from 'react';
import {View, StyleSheet, Image, Text, Button} from 'react-native';

function Card({title, subTitle, image, addbutton}) {
  return (
    <View style={styles.card}>
      <Image style={styles.imageStyles} source={image} />
      <View style={styles.details}>
        <Text style={styles.TextStyle}>{title}</Text>
        <Text style={styles.TextStyle}>{subTitle}</Text>
        <Button title="Add To Cart"></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: '#fff',
    marginBottom: 20,
    overflow: 'hidden',
  },
  imageStyles: {
    width: '100%',
    height: 200,
  },
  TextStyle: {
    color: '#000000',
    fontWeight: '500',
  },
  details: {
    padding: 20,
  },
});
export default Card;
