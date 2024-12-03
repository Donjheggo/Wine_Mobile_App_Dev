import { View, Modal, TouchableOpacity } from "react-native";
import { Text } from "~/components/ui/text";
import { X } from "~/lib/icons/x";
import { Button } from "../ui/button";
import { CircleAlert } from "~/lib/icons/circle-alert";
import { Image } from "expo-image";
import { Minus } from "~/lib/icons/minus";
import { Plus } from "~/lib/icons/plus";
import { useState } from "react";
import type { WineCardT } from "~/lib/types";
import type { ManageModalsVisibilityT } from "~/lib/types";

export default function BuyMoreWineModal({
  item,
  modalVisible,
  setModalsVisibilty,
}: {
  item: WineCardT;
  modalVisible: boolean;
  setModalsVisibilty: React.Dispatch<
    React.SetStateAction<ManageModalsVisibilityT>
  >;
}) {
  const [cases, setCases] = useState<number>(1);

  const total_price = Number(item.market_value) * Number(cases);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      presentationStyle="overFullScreen"
      onRequestClose={() =>
        setModalsVisibilty((prev) => ({ ...prev, buymore: false }))
      }
    >
      <View className="flex-1 bg-black/40 justify-start">
        <View className="bg-white p-4 h-auto rounded-lg m-2 mt-20">
          {/* Title and close button */}
          <View className="flex-row justify-between">
            <Text className="text-lg font-poppins-medium">
              Are you sure you want to buy LWIN: {item.id}
            </Text>
            <Button
              size="icon"
              variant="ghost"
              onPress={() =>
                setModalsVisibilty((prev) => ({ ...prev, buymore: false }))
              }
              className="ml-auto"
            >
              <X className="text-muted-foreground" />
            </Button>
          </View>
          {/* Note */}
          <View className="pt-4 flex-row items-center gap-2">
            <CircleAlert size={18} className="text-orange-500" />
            <View className="flex-1">
              <Text className="text-xs text-muted-foreground">
                Note: if the wine is marked hard it will take 1-2 business to
                buy the wine
              </Text>
            </View>
          </View>
          {/* Image container */}
          <View className="relative mt-4 p-3 items-center gap-4 border border-black/20 rounded-xl">
            <View className="bg-[#C4AD93] absolute left-0 top-0 rounded-tl-xl px-4 py-1">
              <Text className="text-white">{item.type}</Text>
            </View>
            <Image
              source={item.image}
              contentFit="contain"
              style={{ width: 100, height: 100 }}
            />
            <View className="absolute bottom-0 left-0 p-2">
              <Text className="text-muted-foreground text-base">
                {item.case_size}
              </Text>
            </View>
          </View>
          {/* Details */}
          <View className="pt-4 flex-row justify-between">
            <View className="flex-row items-center gap-1">
              <Text>Price: </Text>
              <Text className="text-green-500">£{item.price}</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Text>Market value: </Text>
              <Text className="text-green-500">£{item.market_value}</Text>
            </View>
          </View>
          <View className="pt-4 flex-row items-center justify-between">
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
            <View className="flex-row items-center gap-1">
              <Text>Total price: </Text>
              <Text className="text-green-500">£{total_price}</Text>
            </View>
          </View>
          {/* Buttons */}
          <View className="mt-4 gap-4 items-center">
            <View className="flex-row items-center gap-4 justify-between">
              <Button
                onPress={() =>
                  setModalsVisibilty((prev) => ({ ...prev, buymore: false }))
                }
                variant="outline"
                className="flex-1"
              >
                <Text>Cancel</Text>
              </Button>
              <Button className="flex-1 bg-green-500">
                <Text>Buy</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
