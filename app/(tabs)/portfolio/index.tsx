import { View, FlatList } from "react-native";
import { Text } from "~/components/ui/text";
import { MockUserWines } from "~/lib/mock-data";
import { useState } from "react";
import { router } from "expo-router";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import SearchInput from "~/components/ui/search-input";
import FilterButton from "~/components/ui/filter-button";
import SortButton from "~/components/ui/sort-button";
import MyWinesCard from "~/components/portfolio/my-wines-card";
import FilterWinesModal from "~/components/marketplace/filter-wines-modal";
import ScreenLayout from "~/components/layout/screen-layout";
import PortfolioHeader from "~/components/portfolio/portfolio-header";

export default function Screen() {
  const [filterModalVisible, setFilterModalVisible] = useState<boolean>(false);

  // Initialized default filter to "all" and query to empty string
  useFocusEffect(
    useCallback(() => {
      router.setParams({ filter: "all", query: "" });
    }, [])
  );

  return (
    <ScreenLayout>
      <PortfolioHeader />
      <View className="flex-1 p-2 gap-4 mt-3">
        <View className="flex-row items-center gap-2">
          <Text className="text-base font-poppins-medium">My Wines</Text>
          <View className="flex-1 flex-row items-center gap-1">
            <SearchInput />
            <FilterButton onPress={() => setFilterModalVisible(true)} />
            <SortButton />
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={MockUserWines}
          renderItem={({ item }) => <MyWinesCard item={item} />}
          numColumns={2}
          keyExtractor={(_, index) => `${index}`}
          columnWrapperClassName="gap-2 pb-2"
        />
        {/* Filter Modal */}
        <FilterWinesModal
          modalVisible={filterModalVisible}
          setModalVisible={setFilterModalVisible}
        />
      </View>
    </ScreenLayout>
  );
}
