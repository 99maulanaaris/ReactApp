import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const InputData = ({
  label,
  placeholder,
  keyboardType,
  isTextArea,
  onChangeText,
  value,
  namaState,
}) => {
  if (isTextArea) {
    return (
      <>
        <Text style={styles.label}> {label} </Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder={placeholder}
          style={styles.textInputArea}
          keyboardType={keyboardType}
          value={value}
          onChangeText={(data) => onChangeText(namaState, data)}
        />
      </>
    );
  }

  return (
    <>
      <Text style={styles.label}> {label} </Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(data) => onChangeText(namaState, data)}
      />
    </>
  );
};

export default InputData;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    marginBottom: 10,
  },
  textInputArea: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
});
