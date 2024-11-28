import { View, Modal } from "react-native";
import { Text } from "~/components/ui/text";
import { X } from "~/lib/icons/x";
import { Button } from "~/components/ui/button";
import { PortalHost } from "@rn-primitives/portal";
import PortfolioBuilderForm from "./portfolio-builder-form";

export default function PortfolioBuilderModal({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
          <View className="bg-white p-4 h-[55%] rounded-lg">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-lg font-poppins-medium">
                  Portfolio builder
                </Text>
              </View>
              <Button
                size="icon"
                variant="ghost"
                onPress={() => setModalVisible(false)}
                className="ml-auto"
              >
                <X className="text-muted-foreground" />
              </Button>
            </View>
            {/* Form here */}
            <PortfolioBuilderForm setModalVisible={setModalVisible} />
          </View>
        </View>
        <PortalHost name="portfolio-builder-modal-portal" />
      </Modal>
    </>
  );
}
