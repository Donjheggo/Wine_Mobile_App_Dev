import BadgeFilterButton from "~/components/ui/badge-filter-button";
import SearchInput from "~/components/ui/search-input";
import SortButton from "~/components/ui/sort-button";
import ActivitiesTable from "~/components/settings/activities/activities-table";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { router } from "expo-router";

export default function Screen() {
  // Set default filter to "all" and query to empty string
  useFocusEffect(
    useCallback(() => {
      router.setParams({ filter: "all", query: "" });
    }, [])
  );

  return (
    <View className="flex-1 gap-3">
      <Text className="text-xl font-poppins-medium">Activities</Text>
      <View className="flex-row ml-auto gap-2">
        {filters.map((item, index) => (
          <BadgeFilterButton key={index} filterQuery={item} />
        ))}
      </View>
      <View className="flex-row gap-2 items-center justify-between">
        <SearchInput />
        <SortButton />
      </View>
      <View className="flex-1">
        <ActivitiesTable />
      </View>
    </View>
  );
}

const filters = ["All", "Buy", "Sell", "Gift", "Delivery"];
