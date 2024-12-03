import { View, Modal } from "react-native";
import { Text } from "~/components/ui/text";
import { X } from "~/lib/icons/x";
import { Button } from "../ui/button";
import { CircleAlert } from "~/lib/icons/circle-alert";
import { Image } from "expo-image";
import type { WineCardT } from "~/lib/types";
import type { ManageModalsVisibilityT } from "~/lib/types";

export default function SellWineModal({
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
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      presentationStyle="overFullScreen"
      onRequestClose={() =>
        setModalsVisibilty((prev) => ({ ...prev, sell: false }))
      }
    >
      <View className="flex-1 bg-black/40 justify-start">
        <View className="bg-white p-4 h-auto rounded-lg mt-20 m-2">
          {/* Title and close button */}
          <View className="flex-row justify-between">
            <Text className="text-lg font-poppins-medium">
              Are you sure you want to sell LWIN: {item.id}
            </Text>
            <Button
              size="icon"
              variant="ghost"
              onPress={() =>
                setModalsVisibilty((prev) => ({ ...prev, sell: false }))
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
                Note: Wait for 1-2 days confirmation in notification, if not we
                assign new price on it for your approval.
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
          {/* Price and Investment */}
          <View className="pt-4 flex-row justify-between">
            <View className="flex-row items-center gap-1">
              <Text>Price: </Text>
              <Text className="text-green-500">£{item.price}</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Text>Investment: </Text>
              <Text>£200</Text>
            </View>
          </View>
          {/* Buttons */}
          <View className="mt-8 flex-row items-center gap-4 justify-between">
            <Button
              onPress={() =>
                setModalsVisibilty((prev) => ({ ...prev, sell: false }))
              }
              variant="outline"
              className="flex-1"
            >
              <Text>Cancel</Text>
            </Button>
            <Button className="flex-1 bg-red-700">
              <Text>Sell</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}
