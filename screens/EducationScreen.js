import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import VoiceButton from '../components/VoiceButton';

export default function EducationScreen() {
  const playLesson = (topic) => {
    alert('Playing lesson: ' + topic);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Financial Education</Text>
      <VoiceButton onResult={(t)=>alert('Voice command in education: '+t)} />
      <TouchableOpacity style={styles.card} onPress={()=>playLesson('How to Save Money')}>
        <Text>📹 How to Save Money</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={()=>playLesson('Understanding Loans')}>
        <Text>📹 Understanding Loans</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:16, backgroundColor:'#fff8f5' },
  title: { fontSize:20, fontWeight:'700', color:'#4B0082', marginBottom:12, textAlign:'center' },
  card: { padding:14, backgroundColor:'#fff', borderRadius:8, marginBottom:10 }
});