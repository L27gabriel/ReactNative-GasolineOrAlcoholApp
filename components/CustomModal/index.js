import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomModal({alcoholPrice, gasolinePrice}) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/gas.png')} />

      <Text style={styles.textResult}>Compensa usar Álcool</Text>

      <View style={{gap: 10}}>
        <Text style={styles.textOptions}>Com os preços:</Text>
        <Text style={styles.textPrice}>Álcool: R$ 4.60</Text>
        <Text style={styles.textPrice}>Gasolina: R$ 7.60</Text>
      </View>

      <TouchableOpacity style={styles.areaBtn}>
        <Text style={styles.textBtn}>Calcular novamente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },
  textResult: {
    color: '#00FF00',
    fontSize: 28,
    fontWeight: 'bold',
  },
  textOptions: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textPrice: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
  },
  areaBtn: {
    borderWidth: 1,
    borderRadius: 7,
    width: '60%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ff502f',
  },
  textBtn: {
    color: '#ff502f',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
