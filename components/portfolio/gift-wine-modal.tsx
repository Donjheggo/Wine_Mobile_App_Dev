import { View, Modal } from "react-native";
import { Text } from "~/components/ui/text";
import { X } from "~/lib/icons/x";
import { Button } from "../ui/button";
import { CircleAlert } from "~/lib/icons/circle-alert";
import { Image } from "expo-image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import type { WineCardT } from "~/lib/types";
import type { ManageModalsVisibilityT } from "~/lib/types";

export default function GiftWineModal({
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
  const [email, setEmail] = useState<string>("");

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      presentationStyle="overFullScreen"
      onRequestClose={() => setModalsVisibilty((prev) => ({ ...prev, gift: false }))}
    >
      <View className="flex-1 bg-black/40 justify-start">
        <View className="bg-white p-4 h-auto rounded-lg m-2 mt-20">
          {/* Title and close button */}
          <View className="flex-row justify-between">
            <Text className="text-lg font-poppins-medium">
              Are you sure you want to Gift LWIN: {item.id}
            </Text>
            <Button
              size="icon"
              variant="ghost"
              onPress={() => setModalsVisibilty((prev) => ({ ...prev, gift: false }))}
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
                Note: if the account doesn’t exist yet - we will send them an
                email invitation for acc creation.
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
          {/* Form */}
          <View className="mt-4 gap-4">
            <View className="gap-2">
              <Label className="text-center">Enter Email</Label>
              <Input
                value={email}
                onChangeText={(e) => setEmail(e)}
                className="text-center"
                placeholder="johndoe@gmail.com"
              />
            </View>
            <View className="flex-row items-center gap-4 justify-between">
              <Button
                onPress={() => setModalsVisibilty((prev) => ({ ...prev, gift: false }))}
                variant="outline"
                className="flex-1"
              >
                <Text>Cancel</Text>
              </Button>
              <Button className="flex-1 bg-[#C4AD93]">
                <Text>Gift</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
