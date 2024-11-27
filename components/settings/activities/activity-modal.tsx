import { View, Modal } from "react-native";
import { Text } from "~/components/ui/text";
import { Image } from "expo-image";
import { X } from "~/lib/icons/x";
import type { ActivityDialogPropsT } from "~/lib/types";
import { Button } from "~/components/ui/button";

export default function ActivityModal({
  item,
  modalVisible,
  setModalVisible,
}: {
  item: ActivityDialogPropsT;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      presentationStyle="overFullScreen"
      onRequestClose={() => setModalVisible(false)}
    >
      <View className="flex-1 bg-black/40 justify-center">
        <View className="bg-white p-4 m-2 rounded-lg">
          <Button
            size="icon"
            variant="ghost"
            onPress={() => setModalVisible(false)}
            className="ml-auto"
          >
            <X className="text-muted-foreground" />
          </Button>
          <View className="flex-row gap-4 items-center">
            <View>
              <Image
                source={item.image}
                contentFit="contain"
                style={{ width: 50, height: 100 }}
              />
            </View>
            <View className="py-4 flex-1">
              <Text className="text-lg font-poppins-medium">
                {item.activity}
              </Text>
              <Text className="mt-4 text-lg font-poppins-medium">
                Market Price: ${item.price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
