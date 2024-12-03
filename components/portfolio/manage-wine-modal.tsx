import SellWineModal from "./sell-wine-modal";
import GiftWineModal from "./gift-wine-modal";
import BuymoreModal from "./buymore-wine-modal";
import DeliverWineModal from "./deliver-wine-modal";
import { View, Modal, TouchableOpacity } from "react-native";
import { Text } from "~/components/ui/text";
import { X } from "~/lib/icons/x";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { WineCardT } from "~/lib/types";
import type { ManageModalsVisibilityT } from "~/lib/types";

export default function ManageWineModal({
  item,
  modalVisible,
  setModalVisible,
}: {
  item: WineCardT;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {

  const [modalsVisibility, setModalsVisibilty] =
    useState<ManageModalsVisibilityT>({
      sell: false,
      buymore: false,
      gift: false,
      deliver: false,
    });

  const options = [
    {
      name: "Sell",
      action: () => setModalsVisibilty((prev) => ({ ...prev, sell: true })),
    },
    {
      name: "Buy more",
      action: () => setModalsVisibilty((prev) => ({ ...prev, buymore: true })),
    },
    {
      name: "Gift",
      action: () => setModalsVisibilty((prev) => ({ ...prev, gift: true })),
    },
    {
      name: "Request Delivery",
      action: () => setModalsVisibilty((prev) => ({ ...prev, deliver: true })),
    },
  ];

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        presentationStyle="overFullScreen"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 bg-black/40 justify-end">
          <View className="bg-white p-4 h-[33%] rounded-lg">
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-poppins-medium">
                Manage LWIN: {item.id}
              </Text>
              <Button
                size="icon"
                variant="ghost"
                onPress={() => setModalVisible(false)}
                className="ml-auto"
              >
                <X className="text-muted-foreground" />
              </Button>
            </View>
            <View className="mt-4 flex-1 gap-4">
              {options.map((item, index) => (
                <TouchableOpacity key={index} onPress={item.action}>
                  <View className="border-b pb-2 border-black/20">
                    <Text className="text-lg">{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
      {/* Sell Wine Modal */}
      <SellWineModal
        item={item}
        modalVisible={modalsVisibility.sell}
        setModalsVisibilty={setModalsVisibilty}
      />
      {/* Gift Wine Modal */}
      <GiftWineModal
        item={item}
        modalVisible={modalsVisibility.gift}
        setModalsVisibilty={setModalsVisibilty}
      />
      {/* Buy Wine Modal */}
      <BuymoreModal
        item={item}
        modalVisible={modalsVisibility.buymore}
        setModalsVisibilty={setModalsVisibilty}
      />
      {/* Deliver Wine Modal */}
      <DeliverWineModal
        item={item}
        modalVisible={modalsVisibility.deliver}
        setModalsVisibilty={setModalsVisibilty}
      />
    </>
  );
}
