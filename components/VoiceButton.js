import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Voice from '@react-native-voice/voice';

export default function VoiceButton({ onResult }) {
  const startListening = async () => {
    Voice.onSpeechResults = (event) => {
      if (event.value && event.value.length > 0) {
        onResult(event.value[0]);
      }
    };
    try {
      // Start with bilingual support: Hindi and English
      await Voice.start('hi-IN'); // try Hindi first
    } catch (e) {
      try { await Voice.start('en-IN'); } catch (err) { console.log('Voice start failed', err); }
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={startListening}>
      <Text style={styles.text}>🎙️ Speak Now</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: '#7a42f4', padding: 15, borderRadius: 10, alignItems: 'center', marginVertical: 10 },
  text: { color: '#fff', fontSize: 16 }
});