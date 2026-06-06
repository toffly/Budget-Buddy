import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Category, Transaction } from "../types";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";
import { categoryColors, categoryEmojies } from "../constants";
import Card from "./ui/Card";

interface TransactionListItemProps {
  transaction: Transaction;
  categoryInfo: Category | undefined;
}

const TransactionListItem = ({
  transaction,
  categoryInfo,
}: TransactionListItemProps) => {
  const iconName =
    transaction.type === "Expense" ? "minus-circle" : "plus-circle";
  const color = transaction.type === "Expense" ? "red" : "green";
  const categoryColor = categoryColors[categoryInfo?.name ?? "Default"];
  const emoji = categoryEmojies[categoryInfo?.name ?? "Default"];

  function Amount({
    iconName,
    color,
    amount,
  }: {
    iconName: "minus-circle" | "plus-circle";
    color: string;
    amount: number;
  }) {
    return (
      <View>
        <AntDesign name={iconName} size={18} color={color} />
        <AutoSizeText
          fontSize={32}
          mode={ResizeTextMode.max_lines}
          numberOfLines={1}
          style={[styles.amount, { maxWidth: "80%" }]}
        >
          ${amount}
        </AutoSizeText>
      </View>
    );
  }

  return (
    <Card>
      <Amount iconName={iconName} color={color} amount={transaction.amount} />
      <Text>
        {categoryInfo?.name} amount: {transaction.amount}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  amount: {
    fontSize: 32,
    fontWeight: "800",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  categoryContainer: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignSelf: "flex-start",
  },
  categoryText: {
    fontSize: 12,
  },
});

export default TransactionListItem;
