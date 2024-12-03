import { Link } from "expo-router";
import { CornerUpLeft } from "~/lib/icons/corner-up-left";
import { Pressable } from "react-native";
import { usePathname } from "expo-router";

export default function BackButton() {
  const pathname = usePathname();

  const previous_route = pathname.split("/").slice(0, -1).join("/") || "/";

  return (
    <Link href={previous_route as any} asChild>
      <Pressable>
        <CornerUpLeft className="text-primary" />
      </Pressable>
    </Link>
  );
}
