import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import FIREBASE from '../../Config/FIREBASE';
import CardKontak from '../../Components/CardKontak';
import {ScrollView} from 'react-native-gesture-handler';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kontaks: {},
      kontaksKey: [],
    };
  }

  componentDidMount() {
    this.ambilData();
  }

  ambilData = () => {
    FIREBASE.database()
      .ref('Kontak')
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let kontakItem = {...data};

        this.setState({
          kontaks: kontakItem,
          kontaksKey: Object.keys(kontakItem),
        });
      });
  };

  removeData = (id) => {
    Alert.alert(
      'Info',
      'Data Akan Di Hapus',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            FIREBASE.database()
              .ref('Kontak/' + id)
              .remove();

            this.ambilData();
            Alert.alert('Suksess', 'Berhasil Menghapus Kontak');
          },
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    const {kontaks, kontaksKey} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Daftar kontak</Text>
          <View style={styles.garis} />
        </View>
        <ScrollView style={styles.listKontak}>
          {kontaksKey.length > 0 ? (
            kontaksKey.map((key) => (
              <CardKontak
                kontakItem={kontaks[key]}
                key={key}
                id={key}
                {...this.props}
                removeData={this.removeData}
              />
            ))
          ) : (
            <Text>Daftar Kosong</Text>
          )}
        </ScrollView>

        <View style={styles.wraperButton}>
          <TouchableOpacity
            style={styles.buttonTambah}
            onPress={() => this.props.navigation.navigate('Tambah Kontak')}>
            <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  wraperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  buttonTambah: {
    padding: 20,
    backgroundColor: 'skyblue',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  garis: {
    borderWidth: 1,
    marginTop: 10,
  },

  listKontak: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
});
