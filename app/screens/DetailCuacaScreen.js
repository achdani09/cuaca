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

function InfoRow({ label, value }) {
    return (
      <View style={styles.infoRow}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'skyblue', 
      padding: 20,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#111827', 
      textAlign: 'center',
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
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#E5E7EB',
      paddingBottom: 8,
    },
    label: {
      fontSize: 16,
      color: '#6B7280', 
    },
    value: {
      fontSize: 16,
      fontWeight: '600',
      color: '#374151', 
    },
  });
  