import { Button } from "./button";
import { Link } from "expo-router";
import { CornerUpLeft } from "~/lib/icons/corner-up-left";

export default function BackButton() {
  return (
    <Link href="../" asChild>
      <Button variant="ghost" size="icon">
        <CornerUpLeft className="text-primary" />
      </Button>
    </Link>
  );
}
