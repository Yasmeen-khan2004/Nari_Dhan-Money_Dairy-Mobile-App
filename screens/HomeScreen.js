import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NariDhan Money Diary</Text>

      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceAmount}>₹ 0</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("AddIncome")}
      >
        <Text style={styles.btnText}>➕ Add Income</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("AddExpense")}
      >
        <Text style={styles.btnText}>➖ Add Expense</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Transactions")}
      >
        <Text style={styles.btnText}>📄 View Transactions</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    paddingTop: 80, 
    backgroundColor: "#EAF3FF"  // soft blue background
  },

  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    marginBottom: 30, 
    color: "#2A4D69" 
  },

  balanceCard: {
    width: "90%",
    padding: 25,
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 35,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8
  },

  balanceLabel: { 
    fontSize: 18, 
    color: "#4A4A4A" 
  },

  balanceAmount: { 
    fontSize: 36, 
    fontWeight: "bold", 
    marginTop: 8, 
    color: "#2A4D69" 
  },

  btn: {
    width: "90%",
    backgroundColor: "#4A90E2",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
    elevation: 3
  },

  btnText: { 
    color: "white", 
    fontSize: 18,
    fontWeight: "600"
  }
});
