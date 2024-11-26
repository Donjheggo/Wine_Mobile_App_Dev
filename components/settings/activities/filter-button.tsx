import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";

export default function FilterButton({ filterQuery }: { filterQuery: string }) {
  // Get current params
  const params = useLocalSearchParams<{ filter?: string }>();

  // Store filter in url params
  const handleFilter = () => {
    router.setParams({ filter: filterQuery.toLowerCase() });
  };

  // Check the current filter
  const isSelected = params.filter === filterQuery.toLowerCase();

  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      onPress={handleFilter}
      size="sm"
    >
      <Text>{filterQuery}</Text>
    </Button>
  );
}
