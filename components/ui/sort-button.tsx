import { Button } from "~/components/ui/button";
import { SlidersHorizontal } from "~/lib/icons/sliders-horizontal";

export default function SortButton() {
  return (
    <Button size="icon" variant="ghost">
      <SlidersHorizontal className="text-muted-foreground" size={35} />
    </Button>
  );
}
