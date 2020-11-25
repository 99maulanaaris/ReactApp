import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {InputData} from '../../Components';
import FIREBASE from '../../Config/FIREBASE';

export default class Tambah extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      noHp: '',
      alamat: '',
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmite = () => {
    if (this.state.nama && this.state.noHp) {
      const KontakBaru = FIREBASE.database().ref('Kontak');
      const Kontak = {
        nama: this.state.nama,
        noHp: this.state.noHp,
        alamat: this.state.alamat,
      };

      KontakBaru.push(Kontak)
        .then((data) => {
          Alert.alert('Sukses', 'Berhasil Menambahkan Kontak Baru');
          this.props.navigation.replace('Home');
        })
        .catch((error) => {
          console.log('Error:' + error);
        });
    } else {
      Alert.alert('Error', 'Harap Isi Nama Dan Nomer Hp');
    }
  };

  render() {
    return (
      <View style={styles.pages}>
        <InputData
          label="Nama"
          placeholder="Masukan Nama"
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama"
        />
        <InputData
          label="Nomer Handphone"
          placeholder="Masukan Nomer"
          keyboardType="number-pad"
          onChangeText={this.onChangeText}
          value={this.state.noHp}
          namaState="noHp"
        />
        <InputData
          label="Alamat"
          placeholder="Masukan Alamat"
          isTextArea={true}
          onChangeText={this.onChangeText}
          value={this.state.alamat}
          namaState="alamat"
        />
        <TouchableOpacity
          style={styles.tombol}
          onPress={() => this.onSubmite()}>
          <Text style={styles.textTombol}>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  tombol: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
  },
});
