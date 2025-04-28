import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TentangScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ Tentang Aplikasi</Text>
      
      <View style={styles.card}>
        <Text style={styles.paragraph}>
          Aplikasi Cuaca ini memberikan informasi cuaca terkini berdasarkan kota yang Anda cari.
        </Text>
        <Text style={styles.paragraph}>
          Data cuaca diambil dari OpenWeatherMap API.
        </Text>
        <Text style={styles.paragraph}>
          Aplikasi dibuat menggunakan React Native dengan Expo.
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'skyblue',
      padding: 20,
      justifyContent: 'center',
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#111827',
      textAlign: 'center',
      marginBottom: 30,
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 16,
      padding: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 10,
      elevation: 5,
    },
    paragraph: {
      fontSize: 16,
      color: '#374151',
      marginBottom: 15,
      lineHeight: 24,
      textAlign: 'center',
    },
  });