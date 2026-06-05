import { View, Text } from "react-native";
import React from "react";
import { Category, Transaction } from "../types";
import Card from "./ui/Card";

interface TransactionListItemProps {
  transaction: Transaction;
  categoryInfo: Category | undefined;
}

const TransactionListItem = ({
  transaction,
  categoryInfo,
}: TransactionListItemProps) => {
  return (
    <Card>
      <Text>
        {categoryInfo?.name} amount: {transaction.amount}
      </Text>
    </Card>
  );
};

export default TransactionListItem;
