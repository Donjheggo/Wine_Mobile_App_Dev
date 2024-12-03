import { View, Modal, FlatList } from "react-native";
import { Text } from "~/components/ui/text";
import { X } from "~/lib/icons/x";
import { Button } from "~/components/ui/button";
import { PortalHost } from "@rn-primitives/portal";
import { MockWines } from "~/lib/mock-data";
import WinesCard from "./wine/wines-card";
import { Workflow } from "~/lib/icons/work-flow";

export default function PortfolioBuilderWinesModal({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleSubmit = async () => {
    // Add function here
    setModalVisible(false);
    return;
  };

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
            <View className="flex-row items-center gap-2 justify-between">
              <Workflow className="text-muted-foreground" size={20} />
              <Text className="text-lg font-poppins-medium">
                Portfolio builder
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
            {/* Form here */}
            <View className="mt-5 flex-row justify-between items-center">
              <Text>Result: 6 Wines</Text>
              <Text>Total: £419.00</Text>
            </View>
            <View className="mt-5">
              <FlatList
                data={MockWines}
                horizontal={true}
                contentContainerClassName="gap-4"
                showsHorizontalScrollIndicator={true}
                keyExtractor={(_, index) => `${index}`}
                renderItem={({ item }) => {
                  return <WinesCard item={item} />;
                }}
              />
            </View>
            <View className="mt-5 flex-row items-center gap-4 justify-between">
              <Button
                onPress={() => setModalVisible(false)}
                className="flex-1"
                variant="outline"
              >
                <Text>Cancel</Text>
              </Button>
              <Button onPress={handleSubmit} className="flex-1 bg-violet-500">
                <Text>Add to Cart</Text>
              </Button>
            </View>
          </View>
        </View>
        <PortalHost name="portfolio-builder-modal-portal" />
      </Modal>
    </>
  );
}
