import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailCuacaScreen({ route }) {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Cuaca</Text>
      <View style={styles.card}>
        <InfoRow label="Kota" value={data.name} />
        <InfoRow label="Suhu" value={`${data.main.temp}°C`} />
        <InfoRow label="Cuaca" value={data.weather[0].main} />
        <InfoRow label="Deskripsi" value={data.weather[0].description} />
        <InfoRow label="Kelembaban" value={`${data.main.humidity}%`} />
        <InfoRow label="Tekanan" value={`${data.main.pressure} hPa`} />
        <InfoRow label="Angin" value={`${data.wind.speed} m/s`} />
      </View>
    </View>
  );
}

