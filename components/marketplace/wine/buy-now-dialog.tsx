import { View, Modal } from "react-native";
import { Text } from "~/components/ui/text";
import { CircleAlert } from "~/lib/icons/circle-alert";
import { Button } from "~/components/ui/button";
import Toast from "react-native-toast-message";
import type { WineCardDialogT } from "~/lib/types";

export default function BuyNowDialog({
  modalVisible,
  setModalVisible,
  item,
}: WineCardDialogT) {
  const handleSubmit = async () => {
    // Add function here
    setModalVisible(false);
    Toast.show({
      type: "success",
      text1: "Buy Success",
      text2: `Sucessfully bought Lwin11: ${item.id}.`,
    });
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      presentationStyle="overFullScreen"
      onRequestClose={() => setModalVisible(false)}
    >
      <View className="flex-1 bg-black/40 justify-center">
        <View className="bg-white p-4 h-[25%] rounded-lg m-2">
          <Text className="text-lg font-poppins-medium">
            Are you sure to buy this wine?
          </Text>
          <View className="flex-row items-center gap-2">
            <CircleAlert size={20} className="text-orange-500" />
            <Text>Market value is bigger than the market price.</Text>
          </View>
          <View className="pt-4">
            <Text className="text-lg font-poppins-medium">
              Market Value: £{item.market_value}
            </Text>
            <View className="flex-row items-center gap-2">
              <Text className="text-lg font-poppins-medium">Price:</Text>
              <Text className="text-lg font-poppins-medium text-red-500">
                £{item.price}
              </Text>
            </View>
          </View>
          <View className="mt-4 flex-row items-center justify-between gap-2">
            <Button
              variant="outline"
              onPress={() => setModalVisible(false)}
              className="flex-1"
            >
              <Text>Cancel</Text>
            </Button>
            <Button onPress={handleSubmit} className="flex-1">
              <Text>Buy Now</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}
