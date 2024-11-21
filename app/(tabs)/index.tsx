import React from 'react';
import {Text, View, StyleSheet, TextInput, Button, Pressable, TouchableOpacity} from 'react-native';
import Lamp from '@/assets/images/lamp';

const Index = () => {
  const [text, onChangeText] = React.useState('ex: Gansos');

  return (
    <View style={styles.container}>
      <Lamp width={40} height={40} style={styles.marginBottom} />

      <View style={styles.suggestionBox}>
        <Text style={styles.marginBottom}>Me sugira uma ideia sobre...</Text>
        <TextInput 
          style={[styles.input, styles.marginBottom]} 
          placeholder={text} 
          placeholderTextColor={'#777'} 
          onChangeText={onChangeText}
        />
        <TouchableOpacity style={styles.suggestionButton}>
          <Text style={styles.suggestionButtonText}>Botão de Sugestão</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'center',
  },
  suggestionBox: {
    width: '80%'
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: '#888',
    fontWeight: 'bold',
    color: '#000',
  },
  suggestionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: 'black',
  },
  suggestionButtonText: {
    color: 'white',
    fontWeight:'bold',
    textTransform: 'uppercase',
    fontFamily:'sans-serif'
  }
});

export default Index;