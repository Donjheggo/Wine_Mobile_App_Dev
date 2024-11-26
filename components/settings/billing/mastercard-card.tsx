import { View } from "react-native";
import { Image } from "expo-image";
import { Text } from "~/components/ui/text";

export default function MastercardCard() {
  return (
    <View className="border rounded-lg p-4">
      <View className="flex-row items-center gap-6">
        <Image
          source={require("~/assets/images/mastercard.png")}
          contentFit="contain"
          style={{ width: 100, height: 100 }}
        />
        <View>
          <Text className="text-xl">Master card</Text>
          <Text className="text-red-500">Expiry: 12 / 24</Text>
          <Text>Ending number: 2046</Text>
        </View>
      </View>
    </View>
  );
}
