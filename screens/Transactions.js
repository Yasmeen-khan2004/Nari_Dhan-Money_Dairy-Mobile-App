import { View, Text, FlatList, StyleSheet } from "react-native";
import { useTransactions } from "../context/TransactionContext";

export default function Transactions() {
  const { transactions } = useTransactions();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transactions</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text
              style={[
                styles.amount,
                { color: item.type === "income" ? "green" : "red" },
              ]}
            >
              {item.type === "income" ? "+" : "-"} ₹{item.amount}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    elevation: 2,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: { fontSize: 18, fontWeight: "bold" },
  date: { color: "gray", marginBottom: 4 },
  amount: { fontSize: 20, fontWeight: "bold", textAlign: "right" },
});
