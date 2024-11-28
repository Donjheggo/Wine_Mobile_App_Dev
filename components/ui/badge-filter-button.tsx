import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";

export default function BadgeFilterButton({
  item,
}: {
  item: { name: string; filter: string };
}) {
  // Get current params
  const params = useLocalSearchParams<{ filter?: string }>();

  // Store filter in url params
  const handleFilter = () => {
    router.setParams({ filter: item.filter });
  };

  // Check the current filter
  const isSelected = params.filter === item.filter;

  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      onPress={handleFilter}
      size="sm"
    >
      <Text>{item.name}</Text>
    </Button>
  );
}
