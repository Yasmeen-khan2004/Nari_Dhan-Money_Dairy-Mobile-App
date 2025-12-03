import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { TransactionContext } from "../context/TransactionContext";

export default function ViewTransactionsScreen() {
  const { transactions } = useContext(TransactionContext);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All Transactions</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              { backgroundColor: item.type === "income" ? "#d4ffd4" : "#ffd4d4" },
            ]}
          >
            <Text style={styles.amount}>₹ {item.amount}</Text>
            <Text>{item.note}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  card: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#aaa",
  },
  amount: { fontSize: 18, fontWeight: "bold" },
  date: { marginTop: 5, fontSize: 12, color: "#555" },
});
