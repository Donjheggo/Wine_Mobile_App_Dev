import { View, FlatList } from "react-native";
import { Text } from "~/components/ui/text";
import { MockWines } from "~/lib/mock-data";
import SearchInput from "~/components/ui/search-input";
import FilterButton from "~/components/ui/filter-button";
import SortButton from "~/components/ui/sort-button";
import WinesCard from "~/components/marketplace/wines-card";

export default function Screen() {
  return (
    <View className="flex-1 p-2 gap-4 mt-3">
      <View className="flex-row items-center gap-2">
        <Text className="text-base font-poppins-medium">Available Wines</Text>
        <View className="flex-1 flex-row items-center gap-1">
          <SearchInput />
          <FilterButton onPress={() => console.log("Show modal filter")} />
          <SortButton />
        </View>
      </View>
      <FlatList
        data={MockWines}
        renderItem={({ item }) => <WinesCard item={item} />}
        numColumns={2}
        keyExtractor={(_, index) => `${index}`}
        columnWrapperStyle={{
          justifyContent: "space-between",
          gap: 5,
          marginBottom: 5,
        }}
      />
    </View>
  );
}
