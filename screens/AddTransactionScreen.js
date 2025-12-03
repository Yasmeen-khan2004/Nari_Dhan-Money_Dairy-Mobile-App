import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { TransactionContext } from "../context/TransactionContext";

export default function AddTransactionScreen({ navigation }) {
  const { addIncome, addExpense } = useContext(TransactionContext);

  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Transaction</Text>

      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
      />

      <TextInput
        placeholder="Note"
        value={note}
        onChangeText={setNote}
        style={styles.input}
      />

      <Button
        title="Add Income"
        onPress={() => {
          addIncome(Number(amount), note);
          navigation.goBack();
        }}
      />

      <View style={{ marginVertical: 10 }}></View>

      <Button
        title="Add Expense"
        onPress={() => {
          addExpense(Number(amount), note);
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
