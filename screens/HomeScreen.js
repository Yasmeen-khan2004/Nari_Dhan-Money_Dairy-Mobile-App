import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTransactions } from "../context/TransactionContext";

export default function HomeScreen({ navigation }) {
  const { balance, totalIncome, totalExpense } = useTransactions();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NariDhan Money Diary</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.label}>Total Balance</Text>
        <Text style={styles.amount}>₹ {balance}</Text>

        <Text style={styles.sub}>Income: ₹ {totalIncome}</Text>
        <Text style={styles.sub}>Expense: ₹ {totalExpense}</Text>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("AddIncome")}
      >
        <Text style={styles.btnText}>Add Income</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("AddExpense")}
      >
        <Text style={styles.btnText}>Add Expense</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Transactions")}
      >
        <Text style={styles.btnText}>View Transactions</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 60, backgroundColor: "#EAF4FB" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  balanceCard: {
    width: "90%",
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    elevation: 3,
    marginBottom: 25,
  },
  label: { fontSize: 18 },
  amount: { fontSize: 32, fontWeight: "bold", marginVertical: 10 },
  sub: { fontSize: 16, color: "gray" },
  btn: {
    width: "90%",
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },
  btnText: { color: "#fff", fontSize: 18 },
});
