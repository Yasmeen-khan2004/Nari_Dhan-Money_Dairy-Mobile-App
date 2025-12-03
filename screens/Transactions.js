import { View, Text, FlatList, StyleSheet } from "react-native";
import { useTransactions } from "../context/TransactionContext";

export default function Transactions() {
  const { transactions } = useTransactions();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      <Text
        style={[
          styles.amount,
          item.type === "income" ? styles.inc : styles.exp
        ]}
      >
        {item.type === "income" ? "+" : "-"} ₹{item.amount}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactions</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#e8f4ff" },
  header: { fontSize: 26, textAlign: "center", margin: 15, fontWeight: "bold" },
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 2
  },
  title: { fontSize: 18, fontWeight: "bold" },
  date: { fontSize: 12, color: "#666" },
  amount: { fontSize: 18, fontWeight: "bold" },
  inc: { color: "green" },
  exp: { color: "red" }
});
