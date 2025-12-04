import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useTransactions } from "../../context/TransactionContext";

export default function EditTransaction({ route, navigation }) {
  const { item } = route.params;
  const { editTransaction } = useTransactions();

  const [title, setTitle] = useState(item.title);
  const [amount, setAmount] = useState(String(item.amount));

  const handleSave = () => {
    editTransaction(item.id, {
      title,
      amount: Number(amount),
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Transaction</Text>

      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />

      <TextInput
        style={styles.input}
        value={amount}
        keyboardType="numeric"
        onChangeText={setAmount}
        placeholder="Amount"
      />

      <TouchableOpacity style={styles.btn} onPress={handleSave}>
        <Text style={styles.btnText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 10,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: "purple",
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
  },
  btnText: { color: "white", textAlign: "center", fontWeight: "bold" },
});
