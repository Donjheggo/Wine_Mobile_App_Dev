import LikeButton from "~/components/marketplace/wine/like-button";
import ShareButton from "~/components/marketplace/wine/share-button";
import WineChart from "./wine-chart";
import { Text } from "~/components/ui/text";
import { View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Plus } from "~/lib/icons/plus";
import { Minus } from "~/lib/icons/minus";
import { HandCoins } from "~/lib/icons/hand-coins";
import { CirclePlay } from "~/lib/icons/circle-play";
import { ChartColumnIncreasing } from "~/lib/icons/chart-colum-increasing";
import { useState } from "react";
import type { WineCardT } from "~/lib/types";

export default function WineDetails({ item }: { item: WineCardT }) {
  const [cases, setCases] = useState<number>(1);
  const total_price = Number(item.market_value) * Number(cases);

  return (
    <View>
      {/* Image  */}
      <View className="relative items-center">
        <Image
          source={item.image}
          contentFit="contain"
          style={{ width: 200, height: 200 }}
        />
        <View className="absolute top-0 left-0">
          <View className="flex-row items-center gap-2">
            <View className="bg-black w-[70px] h-7 justify-center items-center rounded-full">
              <Text className="text-white text-sm"> {item.sale}% off</Text>
            </View>
            <View className="bg-black w-[70px] h-7 justify-center items-center rounded-full">
              <Text className="text-white text-sm"> {item.type}</Text>
            </View>
          </View>
        </View>
        <View className="absolute top-0 right-0">
          <View className="flex-row items-center gap-2">
            <ShareButton id={item.id} />
            <LikeButton id={item.id} />
          </View>
        </View>
      </View>
      {/* Details */}
      <View className="mt-4 gap-2">
        <View className="flex-row justify-between">
          <View className="bg-green-500 px-4 py-1 rounded-full">
            <Text className="text-white text-sm">Score: {item.score} </Text>
          </View>
          <View className="bg-orange-500 px-4 py-1 rounded-full">
            <Text className="text-white text-sm">Lwin11: {item.id}</Text>
          </View>
        </View>
        <Text className="text-xl font-poppins-medium">{item.full_name}</Text>
        <Text className="text-muted-foreground text-sm">
          {item.description}
        </Text>
      </View>

      {/* Chart */}
      <WineChart />

      {/* Price details */}
      <View className="flex-row justify-between gap-2">
        <View className="flex-1 bg-muted rounded-xl p-2">
          <HandCoins
            className="text-muted-foreground"
            size={30}
            strokeWidth={1.5}
          />
          <Text className="text-lg text-muted-foreground pt-2">Fee</Text>
          <Text className="text-lg">10.00%</Text>
        </View>
        <View className="flex-1 bg-muted rounded-xl p-2">
          <ChartColumnIncreasing
            className="text-muted-foreground"
            size={30}
            strokeWidth={1.5}
          />
          <Text className="text-lg text-muted-foreground pt-2">
            Performance
          </Text>
          <Text className="text-lg text-green-500">£27.75%</Text>
        </View>
        <View className="flex-1 bg-muted rounded-xl p-2">
          <CirclePlay
            className="text-muted-foreground"
            size={30}
            strokeWidth={1.5}
          />
          <Text className="text-lg text-muted-foreground pt-2">Start</Text>
          <Text className="text-lg text-primary">18.03.2022</Text>
        </View>
      </View>

      {/* Price and Value */}
      <View className="gap-4 mt-4 pt-4 border-t border-black/10">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-lg ">Price: £{item.price}</Text>
          </View>
          <View>
            <Text className="text-lg">Market value: £{item.market_value}</Text>
          </View>
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-4">
            <Text>Case:</Text>
            <View className="flex-row items-center gap-4 border rounded-full px-3 py-1">
              <TouchableOpacity
                onPress={() => setCases((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                <Minus className="text-red-500" />
              </TouchableOpacity>
              <Text className="text-lg">{cases}</Text>
              <TouchableOpacity onPress={() => setCases((prev) => prev + 1)}>
                <Plus className="text-green-500" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text className="text-lg">Total: ${total_price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
