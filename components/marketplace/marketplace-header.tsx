import { View } from "react-native";
import { Button } from "../ui/button";
import { Text } from "../ui/text";
import { Badge } from "../ui/badge";
import { Workflow } from "~/lib/icons/work-flow";
import { useState } from "react";
import InvestmentLevelSelect from "./investment-level";
import PortfolioBuilderModal from "~/components/marketplace/portfolio-builder-modal";

export default function MarketplaceHeader() {
  const [portfolioModalVisible, setPortfolioBuilderModalVisible] =
    useState<boolean>(false);

  return (
    <View className="gap-4">
      <View className="flex-row items-center justify-between">
        <View className="gap-1">
          <Text className="text-lg">Marketplace</Text>
          <Text className="text-muted-foreground">Shop your wine now</Text>
          <Button
            onPress={() => setPortfolioBuilderModalVisible(true)}
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
      {/* Portfolio Builder Modal */}
      <PortfolioBuilderModal
        modalVisible={portfolioModalVisible}
        setModalVisible={setPortfolioBuilderModalVisible}
      />
    </View>
  );
}
