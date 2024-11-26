import { Text } from "~/components/ui/text";
import { View } from "react-native";
import { ChevronRight } from "~/lib/icons/chevron-right";
import { Image } from "expo-image";
import type { SubAccountsCardPropsT } from "~/lib/types";

export default function SubAccountCard({
  image,
  first_name,
  last_name,
}: SubAccountsCardPropsT) {
  return (
    <View
      className="flex-row items-center justify-between py-2"
      style={{ borderBottomWidth: 1, borderColor: "#ccc" }}
    >
      <View className="flex-row gap-4 items-center">
        <Image
          source={image}
          contentFit="contain"
          style={{ width: 30, height: 30, borderRadius: 100 }}
        />
        <Text className="text-lg">
          {first_name} {last_name}
        </Text>
      </View>
      <ChevronRight size={25} className="text-primary" strokeWidth={1.5} />
    </View>
  );
}
