import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile & Reports</Text>
      <View style={styles.card}>
        <Text>Name: Priya</Text>
        <Text>Savings: ₹1200</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:16,backgroundColor:'#fff8f5'},
  title:{fontSize:20,fontWeight:'700',color:'#4B0082',marginBottom:12,textAlign:'center'},
  card:{padding:14,backgroundColor:'#fff',borderRadius:8}
});