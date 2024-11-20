import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import Lamp from '@/assets/images/lamp.tsx';

const Index = () => {
  const [text, onChangeText] = React.useState('Gansos...');

  return (
    <View style={styles.container}>
      <Lamp width={40} height={40} style={styles.marginBottom} />
      <Text>Me sugira uma ideia sobre...</Text>
      <TextInput style={styles.input} value={text} onChangeText={onChangeText}/>
    </View>
  );
};

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 8,
  },

  container: {
    backgroundColor: '#c9c9c9',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Index;