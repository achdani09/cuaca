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
