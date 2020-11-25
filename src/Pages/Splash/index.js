import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAddressBook} from '@fortawesome/free-solid-svg-icons';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <FontAwesomeIcon icon={faAddressBook} size={30} />
      <Text style={styles.text}>Contact App</Text>
      <Text style={styles.version}>Version Beta 1.0</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    marginVertical: 340,
    marginHorizontal: 100,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  version: {
    fontStyle: 'italic',
    fontSize: 12,
  },
});
