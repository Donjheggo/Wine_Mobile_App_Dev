import { View } from "react-native";
import { Text } from "../ui/text";
import { formatAmount } from "~/lib/utils";
import type { InvestmentCardSeparatorT } from "~/lib/types";

export default function InvestmentCardSeparator({
  investment_minimum,
  user_investment,
}: InvestmentCardSeparatorT) {
  const left_amount = investment_minimum - user_investment;

  return (
    <View className="items-center justify-center">
      <View className="items-center gap-2">
        <Text className="text-xs">
          {left_amount > 0 && `${formatAmount(left_amount)} left`}
        </Text>
        <View className="border-t w-16"></View>
      </View>
    </View>
  );
}
