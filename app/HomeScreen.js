import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../constants/api';

export default function BerandaScreen({ navigation }) {
    const [kota, setKota] = useState('');
    const [cuaca, setCuaca] = useState(null);
  
    const ambilDataCuaca = async () => {
      try {
        const response = await axios.get(`${BASE_URL}?q=${kota}&appid=${API_KEY}&units=metric&lang=id`);
        setCuaca(response.data);
        Keyboard.dismiss();
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        alert('Kota tidak ditemukan. Coba lagi.');
      }
    };

    return (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
              <Text style={styles.title}>🌦️ Weather App</Text>
    
              <TextInput
                placeholder="Cari kota..."
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                value={kota}
                onChangeText={setKota}
              />
    
              <TouchableOpacity style={styles.button} onPress={ambilDataCuaca}>
                <Text style={styles.buttonText}>🔍 Cari Cuaca</Text>
              </TouchableOpacity>
    
              {cuaca && (
                <View style={styles.resultCard}>
                  <Text style={styles.temperature}>{cuaca.main.temp}°C</Text>
                  <Text style={styles.weather}>{cuaca.weather[0].main}</Text>
                  <Text style={styles.description}>{cuaca.weather[0].description}</Text>
    
                  <TouchableOpacity
                    style={styles.detailButton}
                    onPress={() => navigation.navigate('Detail Cuaca', { data: cuaca })}
                  >
                    <Text style={styles.detailButtonText}>📋 Lihat Detail</Text>
                  </TouchableOpacity>
                </View>
              )}
    
              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => navigation.navigate('Tentang')}
              >
                <Text style={styles.secondaryButtonText}>ℹ️ Tentang Aplikasi</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      );
    }
    const styles = StyleSheet.create({
        scrollContainer: {
          flexGrow: 1,
          backgroundColor: 'skyblue',
        },
        container: {
          flex: 1,
          padding: 24,
          justifyContent: 'center',
        },
        title: {
          fontSize: 32,
          fontWeight: 'bold',
          color: '#1F2937',
          marginBottom: 30,
          textAlign: 'center',
        },
        input: {
          borderWidth: 1,
          borderColor: '#D1D5DB',
          backgroundColor: '#FFFFFF',
          borderRadius: 16,
          paddingVertical: 14,
          paddingHorizontal: 18,
          fontSize: 16,
          marginBottom: 15,
          color: '#111827',
          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 5,
          elevation: 3,
        },
        button: {
          backgroundColor: '#2563EB',
          paddingVertical: 16,
          borderRadius: 16,
          alignItems: 'center',
          marginBottom: 30,
          shadowColor: '#2563EB',
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 6,
          elevation: 4,
        },
        buttonText: {
          color: 'white',
          fontSize: 18,
          fontWeight: '600',
        },
        resultCard: {
          backgroundColor: '#FFFFFF',
          borderRadius: 20,
          padding: 24,
          alignItems: 'center',
          marginBottom: 20,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 6 },
          shadowRadius: 10,
          elevation: 8,
        },
        temperature: {
          fontSize: 60,
          fontWeight: 'bold',
          color: '#111827',
          marginBottom: 6,
        },
        weather: {
          fontSize: 22,
          fontWeight: '600',
          color: '#374151',
          marginBottom: 6,
          textTransform: 'capitalize',
        },
        description: {
          fontSize: 16,
          color: '#6B7280',
          marginBottom: 20,
          textTransform: 'capitalize',
          textAlign: 'center',
        },
        detailButton: {
          backgroundColor: '#3B82F6',
          paddingVertical: 12,
          paddingHorizontal: 30,
          borderRadius: 12,
        },
        detailButtonText: {
          color: 'white',
          fontSize: 16,
          fontWeight: '600',
        },
        secondaryButton: {
          marginTop: 20,
          alignItems: 'center',
        },
        secondaryButtonText: {
          color: '#2563EB',
          fontSize: 16,
          fontWeight: '600',
        },
      });
      