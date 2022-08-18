import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text> CartScreen </Text>
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDF2F3',
  },
});
