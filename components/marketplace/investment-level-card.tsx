import { Image } from "expo-image";
import { View } from "react-native";
import { CircleCheck } from "~/lib/icons/circle-check";
import type { InvestmentLevelCardT } from "~/lib/types";

export default function InvestmentLevelCard({
  image,
  investment_minimum,
  user_investment,
}: InvestmentLevelCardT) {
  const minimum = investment_minimum;

  return (
    <View className="w-[150px] relative bg-red rounded-xl">
      {user_investment >= minimum && (
        <View className="absolute left-[42%]">
          <CircleCheck
            style={{ zIndex: 1 }}
            fill="green"
            className="text-white"
          />
        </View>
      )}
      <View className="mt-3 relative">
        <Image
          source={image}
          contentFit="fill"
          style={{ width: 150, height: 200 }}
        />
        {user_investment < minimum && (
          <View className="absolute inset-0 bg-black/50 rounded-xl" />
        )}
      </View>
    </View>
  );
}
