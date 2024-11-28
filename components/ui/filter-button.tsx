import { Button } from "~/components/ui/button";
import { SlidersHorizontal } from "~/lib/icons/sliders-horizontal";

export default function FilterButton({ onPress }: { onPress: () => void }) {
  return (
    <Button onPress={onPress} size="icon" variant="ghost">
      <SlidersHorizontal
        className="text-muted-foreground"
        size={30}
        strokeWidth={1.5}
      />
    </Button>
  );
}
