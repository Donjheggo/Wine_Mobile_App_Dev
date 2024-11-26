import { View } from "react-native";
import { Text } from "~/components/ui/text";
import FilterButton from "~/components/settings/activities/filter-button";
import SearchInput from "~/components/settings/activities/search-input";
import SortButton from "~/components/settings/activities/sort-button";
import ActivitiesTable from "~/components/settings/activities/activities-table";

export default function Screen() {
  return (
    <View>
      <Text className="text-xl font-poppins-medium">Activities</Text>
      <View className="flex-row ml-auto mt-2 gap-2">
        {filters.map((item, index) => (
          <FilterButton key={index} filterQuery={item} />
        ))}
      </View>
      <View className="mt-4 flex-row gap-2 items-center justify-between">
        <SearchInput />
        <SortButton />
      </View>
      <View className="mt-4">
        <ActivitiesTable />
      </View>
    </View>
  );
}

const filters = ["All", "Buy", "Sell", "Gift", "Delivery"];
