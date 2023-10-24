import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.logoArea}>
          <Image source={require('./assets/logo.png')} />
          <Text style={styles.textLogoArea}>Qual a melhor opção?</Text>
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Álcool (preço por litro):</Text>
          <TextInput placeholder="EX: 4.60" style={styles.input} />

          <Text style={styles.inputLabel}>Gasolina (preço por litro):</Text>
          <TextInput placeholder="EX: 7.30" style={styles.input} />

          <TouchableOpacity style={styles.areaBtn}>
            <Text style={styles.textBtn}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 15,
  },
  logoArea: {
    marginTop: 16,
    alignItems: 'center',
  },
  textLogoArea: {
    marginTop: 20,
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  inputArea: {
    alignItems: 'flex-start',
    marginTop: 20,
  },
  inputLabel: {
    marginTop: 20,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 7,
    borderWidth: 1,
    width: '100%',
    marginTop: 8,
    backgroundColor: '#fff',
    fontSize: 20,
    paddingLeft: 15,
    height: 50,
  },
  areaBtn: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#ff502f',
    width: '100%',
    justifyContent: 'center',
    height: 50,
    borderRadius: 7,
  },
  textBtn: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
