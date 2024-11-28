import { View, FlatList } from "react-native";
import { Text } from "~/components/ui/text";
import { MockWines } from "~/lib/mock-data";
import { useState } from "react";
import { router } from "expo-router";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import SearchInput from "~/components/ui/search-input";
import FilterButton from "~/components/ui/filter-button";
import SortButton from "~/components/ui/sort-button";
import WinesCard from "~/components/marketplace/wines-card";
import FilterWinesModal from "~/components/marketplace/filter-wines-modal";

export default function Screen() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // Initialized default filter to "all" and query to empty string
  useFocusEffect(
    useCallback(() => {
      router.setParams({ filter: "all", query: "" });
    }, [])
  );

  return (
    <View className="flex-1 p-2 gap-4 mt-3">
      <View className="flex-row items-center gap-2">
        <Text className="text-base font-poppins-medium">Available Wines</Text>
        <View className="flex-1 flex-row items-center gap-1">
          <SearchInput />
          <FilterButton onPress={() => setModalVisible(true)} />
          <SortButton />
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={MockWines}
        renderItem={({ item }) => <WinesCard item={item} />}
        numColumns={2}
        keyExtractor={(_, index) => `${index}`}
        columnWrapperClassName="gap-2 pb-2"
      />
      {/* Filter Modal */}
      <FilterWinesModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
