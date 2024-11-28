import { View } from "react-native";
import { Button } from "../ui/button";
import { Text } from "../ui/text";
import { Badge } from "../ui/badge";
import { Workflow } from "~/lib/icons/work-flow";
import InvestmentLevelSelect from "./investment-level";

export default function MarketplaceHeader() {
  return (
    <View className="gap-4">
      <View className="flex-row items-center justify-between">
        <View className="gap-1">
          <Text className="text-lg">Marketplace</Text>
          <Text className="text-muted-foreground">Shop your wine now</Text>
          <Button
            size="sm"
            className="bg-[#5856D6] flex-row gap-2 items-center"
          >
            <Workflow size={18} className="text-white" />
            <Text>Portfolio Builder</Text>
          </Button>
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
      <InvestmentLevelSelect />
    </View>
  );
}
