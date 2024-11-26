import { Button } from "~/components/ui/button";
import { Menu } from "~/lib/icons/menu";

export default function SortButton() {
  return (
    <Button size="icon" variant="ghost">
      <Menu className="text-muted-foreground" size={35}/>
    </Button>
  );
}
