import { Input } from "~/components/ui/input";
import { useDebouncedCallback } from "use-debounce";
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Search } from "~/lib/icons/search";

export default function SearchInput() {
  // Get current params query
  const params = useLocalSearchParams<{ query?: string }>();

  // Set params within .2 seconds of typing to prevent server overloading of query from multiple users
  const handleSearch = useDebouncedCallback((search: string) => {
    router.setParams({ query: search.toLowerCase() });
  }, 200);

  return (
    <View className="flex-1 relative">
      <Search
        className="text-muted-foreground top-4 md:top-2"
        style={{ position: "absolute", right: 10, zIndex: 1 }}
      />
      <Input
        defaultValue={params.query}
        placeholder="Search..."
        onChangeText={(input) => {
          handleSearch(input);
        }}
      />
    </View>
  );
}
