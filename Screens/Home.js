import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text, TextInput} from 'react-native';
import Card from '../components/Card';
// const getArticlesFromApi = async () => {
//   let response = await fetch(
//     'https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json',
//   );
//   let json = await response.json();
//   setdata(json);
// };

const Home = () => {
  const [myUserData, setMyUserData] = useState();

  const getUserData = async () => {
    try {
      const response = await fetch(
        'https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json',
      );
      const myData = await response.json();

      setMyUserData(myData);
      console.log(myData);
    } catch (error) {
      console.error();
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#748c94',
        paddingTop: 50,
        padding: 20,
      }}>
      <TextInput
        style={styles.textiputStyle}
        placeholder="Search Here "
        underlineColorAndroid="transparent"
      />

      <FlatList
        data={myUserData}
        renderItem={({item}) => {
          return (
            <View>
              <Card
                title={item.name}
                subTitle={item.price}
                image={{uri: item.imageURL}}
              />
            </View>
          );
        }}
      />
      {/* <Card
        title="Red jacket"
        subTitle="$ 300"
        image={require('../assets/jacket.jpg')}
      /> */}
      {/* <Card
        title="Red jacket"
        subTitle="$ 300"
        image={require('../assets/jacket.jpg')}
      />
      <Card
        title="Red jacket"
        subTitle="$ 300"
        image={require('../assets/jacket.jpg')}
      />
      <Card
        title="Red jacket"
        subTitle="$ 300"
        image={require('../assets/jacket.jpg')}
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  styles: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  textiputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'grey',
    borderRadius: 20,
    paddingTop: 10,
  },
});

export default Home;
