import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import VoiceButton from '../components/VoiceButton';

export default function MoneyDiaryScreen() {
  const [entries, setEntries] = useState([
    { id: '1', type: 'income', category: 'Tailoring', amount: 1000 },
    { id: '2', type: 'expense', category: 'Groceries', amount: 200 }
  ]);

  const handleVoiceResult = async (text) => {
    try {
      const resp = await fetch('http://YOUR_BACKEND_URL/voice-input', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      const data = await resp.json();
      // For now we push a simple local entry based on the backend response
      if (data.type === 'income' || data.type === 'expense') {
        const newEntry = {
          id: String(entries.length + 1),
          type: data.type,
          category: data.get('category') || data.category || 'General',
          amount: Number(data.amount || 0)
        };
        setEntries([newEntry, ...entries]);
      }
    } catch (e) {
      console.log('Error sending to backend', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Money Diary</Text>
      <VoiceButton onResult={handleVoiceResult} />
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.type === 'income' ? '🟢 Income' : '🔴 Expense'} - {item.category}</Text>
            <Text>₹{item.amount}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff8f5' },
  title: { fontSize: 22, fontWeight: '700', textAlign: 'center', color: '#4B0082', marginBottom: 12 },
  item: { padding: 12, backgroundColor: '#fff', marginBottom: 8, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between' }
});