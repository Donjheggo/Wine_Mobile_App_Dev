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
import type { DeliverFormT } from "~/lib/types";
import type { ManageModalsVisibilityT } from "~/lib/types";

export default function DeliverWineModal({
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
  const [form, setForm] = useState<DeliverFormT>({
    name: "",
    address: "",
    contact_number: "",
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      presentationStyle="overFullScreen"
      onRequestClose={() =>
        setModalsVisibilty((prev) => ({ ...prev, deliver: false }))
      }
    >
      <View className="flex-1 bg-black/40 justify-start">
        <View className="bg-white p-4 h-auto rounded-lg m-2 mt-20">
          {/* Title and close button */}
          <View className="flex-row justify-between">
            <Text className="text-lg font-poppins-medium">
              Are you sure you want to deliver LWIN: {item.id}
            </Text>
            <Button
              size="icon"
              variant="ghost"
              onPress={() =>
                setModalsVisibilty((prev) => ({ ...prev, deliver: false }))
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
                Note: Please wait for 3-5 business day for delivery to arrived
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
          {/* Form */}
          <View className="mt-4 gap-4">
            <View className="gap-2">
              <Label>Name</Label>
              <Input
                value={form.name}
                onChangeText={(e) => setForm({ ...form, name: e })}
                placeholder="johndoe@gmail.com"
              />
            </View>
            <View className="gap-2">
              <Label>Address</Label>
              <Input
                value={form.address}
                onChangeText={(e) => setForm({ ...form, address: e })}
                placeholder="Kingston, 70 Stone Cellar Road"
              />
            </View>
            <View className="gap-2">
              <Label>Contact #</Label>
              <Input
                value={form.contact_number}
                onChangeText={(e) => setForm({ ...form, contact_number: e })}
                placeholder="Kingston, 70 Stone Cellar Road"
              />
            </View>
            <View className="flex-row items-center gap-4 justify-between">
              <Button
                onPress={() =>
                  setModalsVisibilty((prev) => ({ ...prev, deliver: false }))
                }
                variant="outline"
                className="flex-1"
              >
                <Text>Cancel</Text>
              </Button>
              <Button className="flex-1 ">
                <Text>Deliver</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
