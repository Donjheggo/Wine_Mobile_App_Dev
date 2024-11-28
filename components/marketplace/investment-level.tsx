import { useState } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { Text } from "../ui/text";
import { ChevronDown } from "~/lib/icons/chevron-down";
import { ChevronUp } from "~/lib/icons/chevron-up";
import InvestmentLevelCard from "./investment-level-card";
import InvestmentCardSeparator from "./investment-card-separator";

export default function InvestmentLevel() {
  const [visible, setVisible] = useState<boolean>(false);

  const user_investment = 10000;

  return (
    <View className="border-y border-muted-foreground">
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <View className="flex-row items-center justify-between py-2">
          <Text>Investment Level</Text>
          {visible ? (
            <ChevronUp className="text-muted-foreground" />
          ) : (
            <ChevronDown className="text-muted-foreground" />
          )}
        </View>
      </TouchableOpacity>
      {visible && (
        <View className="py-2">
          <FlatList
            horizontal
            data={selections}
            renderItem={({ item, index }) => {
              return (
                <View className="flex-row">
                  {/* This will not render on the first element */}
                  {index !== 0 && (
                    <InvestmentCardSeparator
                      user_investment={user_investment}
                      investment_minimum={item.investment_minimum}
                    />
                  )}
                  <InvestmentLevelCard
                    investment_minimum={item.investment_minimum}
                    image={item.image}
                    user_investment={user_investment}
                  />
                </View>
              );
            }}
            keyExtractor={(_, index) => `${index}`}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
}

const selections = [
  {
    investment_minimum: 0,
    image: require("~/assets/images/investment-level-picollo.png"),
  },
  {
    investment_minimum: 11000,
    image: require("~/assets/images/investment-level-standard.png"),
  },
  {
    investment_minimum: 100001,
    image: require("~/assets/images/investment-level-magnum.png"),
  },
];
