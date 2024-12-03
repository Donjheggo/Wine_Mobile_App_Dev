import { View, Modal, TouchableOpacity } from "react-native";
import { Text } from "~/components/ui/text";
import { X } from "~/lib/icons/x";
import { Button } from "~/components/ui/button";
import type { ManageModalsVisibilityT } from "~/lib/types";

export default function PortfolioWineMoreOptionsModal({
  modalVisible,
  setModalVisible,
  setDeliverModalVisible,
  setGiftModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setDeliverModalVisible: React.Dispatch<
    React.SetStateAction<ManageModalsVisibilityT>
  >;
  setGiftModalVisible: React.Dispatch<
    React.SetStateAction<ManageModalsVisibilityT>
  >;
}) {
  const options = [
    {
      name: "Gift",
      action: () => setGiftModalVisible((prev) => ({ ...prev, gift: true })),
    },
    {
      name: "Deliver",
      action: () =>
        setDeliverModalVisible((prev) => ({ ...prev, deliver: true })),
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
          <View className="bg-white p-4 h-[25%] rounded-lg">
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-poppins-medium">More Options</Text>
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
    </>
  );
}
