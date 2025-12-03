import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { useTransactions } from "../context/TransactionContext";

export default function AddExpense({ navigation }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const { addExpense } = useTransactions();

  const handleSave = () => {
    if (!title || !amount || !date) return alert("All fields required!");

    addExpense(title, amount, date);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Expense</Text>

      <TextInput
        placeholder="Expense Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Amount (₹)"
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TextInput
        placeholder="Date (YYYY-MM-DD)"
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />

      <TouchableOpacity style={styles.btn} onPress={handleSave}>
        <Text style={styles.btnText}>Save Expense</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fef4f4" },
  header: { fontSize: 26, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 15,
    backgroundColor: "white"
  },
  btn: {
    backgroundColor: "#E94E77",
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    alignItems: "center"
  },
  btnText: { color: "white", fontSize: 18, fontWeight: "bold" }
});
