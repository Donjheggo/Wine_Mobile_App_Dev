import { View, Pressable } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";

export default function SettingsButton() {
  return (
    <Link href="/(tabs)/settings" asChild>
      <Pressable className="rounded-full overflow-hidden border border-primary">
        <Image
          source={require("~/assets/images/user-placeholder.jpg")}
          contentFit="contain"
          style={{ width: 40, height: 40 }}
        />
      </Pressable>
    </Link>
  );
}
