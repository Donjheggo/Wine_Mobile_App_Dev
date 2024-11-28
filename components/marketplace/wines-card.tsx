import { View } from "react-native";
import { Image } from "expo-image";
import { Text } from "../ui/text";
import { TrendingUp } from "~/lib/icons/trending-up";
import type { WineCardT } from "~/lib/types";

export default function WinesCard({ item }: { item: WineCardT }) {
  return (
    <View className="relative border border-muted-foreground w-[50%] flex-1 rounded-xl p-2">
      <View className="absolute top-0 left-0 bg-[#C4AD93]  px-4 py-1 rounded-tl-xl">
        <Text className="text-white text-sm">{item.type}</Text>
      </View>
      <View className="absolute top-0 right-0 px-4 py-1 rounded-tr-xl">
        <TrendingUp size={20} className="text-green-500"/>
        <Text className="text-muted-foregroundt text-sm">{item.growth}%</Text>
      </View>
      <View className="items-center">
        <Image
          source={item.image}
          contentFit="contain"
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View className="pt-2">
        <Text>{item.name}</Text>
        <View className="flex-row justify-between items-center pt-2">
          <Text className="text-sm text-muted-foreground">Market Value:</Text>
          <Text className="text-sm text-green-500">£{item.market_value}</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-sm text-muted-foreground">Score:</Text>
          <Text className="text-sm text-muted-foreground">{item.score}</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-sm text-muted-foreground">Case Size:</Text>
          <Text className="text-sm text-muted-foreground">
            {item.case_size}
          </Text>
        </View>
      </View>
    </View>
  );
}
