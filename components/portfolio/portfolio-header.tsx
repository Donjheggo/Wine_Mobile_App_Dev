import { View } from "react-native";
import { Text } from "../ui/text";
import { Badge } from "../ui/badge";
import InvestmentLevel from "../marketplace/investment-level";

export default function PortfolioHeader() {
  return (
    <View className="gap-4">
      <View className="flex-row items-center justify-between">
        <View className="gap-1">
          <Text className="text-lg">Portfolio and Status</Text>
          <Text className="text-muted-foreground">Your wine collection</Text>
        </View>
        <View className="gap-1">
          <Text className="text-muted-foreground">Status</Text>
          <Text className="text-lg text-primary font-poppins-medium">
            Magnum
          </Text>
          <Badge>
            <Text>2.5% Fees</Text>
          </Badge>
        </View>
      </View>
      <InvestmentLevel />
    </View>
  );
}
