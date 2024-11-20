import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';



const Index = () => {
  const [text, onChangeText] = React.useState('Gansos...');

  return (
    <View style={styles.container}>
      <Text>Me sugira uma ideia sobre...</Text>
      <TextInput style={styles.input} value={text} onChangeText={onChangeText}/>
    </View>
  );
};

const styles = StyleSheet.create({
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