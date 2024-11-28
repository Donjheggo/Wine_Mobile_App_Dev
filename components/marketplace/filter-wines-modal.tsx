import { View, Modal, FlatList } from "react-native";
import { Text } from "~/components/ui/text";
import { X } from "~/lib/icons/x";
import { Button } from "~/components/ui/button";
import BadgeFilterButton from "../ui/badge-filter-button";

export default function FilterWinesModal({
  modalVisible,
  setModalVisible,
}: {
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
      <View className="flex-1 bg-black/40 justify-end">
        <View className="bg-white p-4 h-[33%] rounded-lg">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-poppins-medium">Filter wines</Text>
            <Button
              size="icon"
              variant="ghost"
              onPress={() => setModalVisible(false)}
              className="ml-auto"
            >
              <X className="text-muted-foreground" />
            </Button>
          </View>
          <View className="mt-4 flex-1">
            <Text>Sort by tag</Text>
            <View className="mt-4 flex-1">
              <FlatList
                data={filters}
                keyExtractor={(_, index) => `${index}`}
                renderItem={({ item }) => <BadgeFilterButton item={item} />}
                numColumns={3}
                columnWrapperClassName="flex-row flex-wrap gap-2 mb-2"
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const filters = [
  { name: "All", filter: "all" },
  { name: "Special Bundles", filter: "special-bundles" },
  { name: "Assortments", filter: "assortments" },
  { name: "Under Market Value", filter: "under-market-value" },
  { name: "Rare Wines", filter: "rare-wines" },
  { name: "Special Volumes", filter: "special-volumes" },
];
