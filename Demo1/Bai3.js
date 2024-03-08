import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextInputLayout from './TextInputLayout'; // Đường dẫn đến file TextInputLayout.js
import TextInputLayoutError from './TextInputLayoutError';
const Bai3 = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [error, setError] = useState('');

  const handleTextChange1 = (text) => {
    setText1(text);
  };

  const handleTextChange2 = (text) => {
    setText2(text);
  };
  const handleTextChange3 = (text) => {
    setText3(text);
  };

  const handleTextChangeError = (text) => {
    setText3(text);
    if (!text) {
      setError('Vui lòng nhập thông tin');
    } else {
      setError('');
    }
  };


  return (
    <View style={styles.container}>
      <TextInputLayout
        label="Title 1"
        placeholder="Nhập thông tin 1"
        onChangeText={handleTextChange1}
        value={text1}
      />
      <TextInputLayout
        style={styles.text}
        label="Title 2"
        placeholder="Nhập thông tin 2"
        onChangeText={handleTextChange2}
        value={text2}
      />
      <TextInputLayoutError
        label="Title 3"
        placeholder="Nhập thông tin"
        onChangeText={handleTextChangeError}
        value={text3}
        errorMessage={error}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  borderError: {
    borderColor: 'red'
  }
  ,
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    backgroundColor: '#faa'
  }
});

export default Bai3;
