import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TransactionProvider } from "./context/TransactionContext";

// Screens
import HomeScreen from "./screens/HomeScreen";
import MoneyDiaryScreen from "./screens/MoneyDiaryScreen";
import EducationScreen from "./screens/EducationScreen";
import RecommendationScreen from "./screens/RecommendationScreen";
import ProfileScreen from "./screens/ProfileScreen";

import AddIncome from "./screens/AddIncome";
import AddExpense from "./screens/AddExpense";
import Transactions from "./screens/Transactions";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function DiaryStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DiaryMain" component={MoneyDiaryScreen} />
      <Stack.Screen name="AddIncome" component={AddIncome} />
      <Stack.Screen name="AddExpense" component={AddExpense} />
      <Stack.Screen name="Transactions" component={Transactions} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <TransactionProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Diary" component={DiaryStack} />
          <Tab.Screen name="Education" component={EducationScreen} />
          <Tab.Screen name="Recommend" component={RecommendationScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
}
