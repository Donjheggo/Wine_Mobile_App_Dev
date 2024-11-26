import { Link } from "expo-router";
import { CornerUpLeft } from "~/lib/icons/corner-up-left";
import { Pressable } from "react-native";

export default function BackButton() {
  return (
    <Link href="../" asChild>
      <Pressable>
        <CornerUpLeft className="text-primary" />
      </Pressable>
    </Link>
  );
}
