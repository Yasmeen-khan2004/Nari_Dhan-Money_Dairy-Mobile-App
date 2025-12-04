import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { useTransactions } from "../context/TransactionContext";

export default function AddExpense({ navigation }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const { addExpense } = useTransactions();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Expense</Text>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addExpense(title, amount);
          navigation.goBack();
        }}
      >
        <Text style={styles.btnText}>Save Expense</Text>
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
    borderRadius: 8,
    marginBottom: 15,
  },
  btn: {
    backgroundColor: "#E53935",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
});
