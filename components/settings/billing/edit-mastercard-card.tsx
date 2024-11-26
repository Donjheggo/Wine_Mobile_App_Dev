import { View } from "react-native";
import { Image } from "expo-image";
import { Text } from "~/components/ui/text";
import { Pencil } from "~/lib/icons/pencil";
import { Link } from "expo-router";

export default function EditMastercardCard() {
  return (
    <View className="border rounded-lg p-4">
      <View className="flex-row items-center gap-4">
        <Image
          source={require("~/assets/images/mastercard.png")}
          contentFit="contain"
          style={{ width: 50, height: 50 }}
        />
        <View>
          <Text className="">**** - **** - **** - 4569</Text>
          <Text className="text-red-500">Expiry: 12 / 24</Text>
        </View>
        <View className="ml-auto">
          <Link href="/" asChild>
            <Pencil className="text-muted-foreground" />
          </Link>
        </View>
      </View>
    </View>
  );
}
