import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FIREBASE from '../../Config/FIREBASE';

export default class DetailKontak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kontak: {},
    };
  }

  getData = () => {
    FIREBASE.database()
      .ref('Kontak/' + this.props.route.params.id)
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let kontakItem = {...data};

        this.setState({
          kontak: kontakItem,
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const {kontak} = this.state;
    return (
      <View style={styles.page}>
        <View>
          <Text>Nama </Text>
          <Text style={styles.text}>{kontak.nama} </Text>

          <Text>Nomer </Text>
          <Text style={styles.text}>{kontak.noHp} </Text>

          <Text>Alamat </Text>
          <Text style={styles.text}>{kontak.alamat} </Text>
        </View>
        <View style={styles.icon}>
          <FontAwesomeIcon icon={faAddressCard} size={50} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
    margin: 30,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    padding: 3,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
