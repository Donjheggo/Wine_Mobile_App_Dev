import { Button } from "~/components/ui/button";
import { ArrowDownUp } from "~/lib/icons/arrow-down-up";

export default function SortButton() {
  return (
    <Button size="icon" variant="ghost">
      <ArrowDownUp
        className="text-muted-foreground"
        size={30}
        strokeWidth={1.5}
      />
    </Button>
  );
}
