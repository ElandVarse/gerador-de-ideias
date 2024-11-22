import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Lamp from '@/assets/images/lamp';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [suggestion, setSuggestion] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.lamp}>
        <Lamp width={120} height={120} style={[styles.marginBottom]} />
      </View>

      <View style={styles.suggestionBox}>
        <Text style={[styles.marginBottom, styles.suggestMeText]}>Me sugira uma ideia sobre...</Text>

        <TextInput 
          style={[styles.input, styles.marginBottom]} 
          placeholder={'ex: Gansos'} 
          placeholderTextColor={'#777'} 
          value={suggestion}
          onChangeText={(suggestion) => setSuggestion(suggestion)}
        />

        <TouchableOpacity style={styles.suggestionButton}>
          <Text style={styles.suggestionButtonText}>Botão de Sugestão</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.bottom, styles.suggestMeText]}>Desenvolvido por liquid.dreper@gmail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 8,
  },
  container: {
    backgroundColor: '#111',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lamp: {
    position: 'absolute',
    top: 48,
    backgroundColor: '#393428',
    padding: 12,
    borderRadius: '50%',
  },
  suggestionBox: {
    width: '80%',
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
  suggestMeText: {
    color: '#ffffff',
    fontWeight: 'bold'
  },
  suggestionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: '#8E7535',
  },
  suggestionButtonText: {
    color: 'white',
    fontWeight:'bold',
    textTransform: 'uppercase',
    fontFamily:'sans-serif'
  },
  bottom: {
    position: 'absolute',
    bottom: 24,
  }
});

export default Index;