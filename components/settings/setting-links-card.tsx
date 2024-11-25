import { Text } from "~/components/ui/text";
import { View, TouchableOpacity } from "react-native";
import { ChevronRight } from "~/lib/icons/chevron-right";
import { Link } from "expo-router";
import type { SettingLinksCardPropsT } from "~/lib/types";

export default function SettingLinksCard({
  name,
  Icon,
  href,
}: SettingLinksCardPropsT) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity>
        <View
          className="flex-row items-center justify-between py-2"
          style={{ borderBottomWidth: 1, borderColor: "#ccc" }}
        >
          <View className="flex-row gap-4 items-center">
            <Icon size={25} className="text-primary" strokeWidth={1.5} />
            <Text className="text-lg">{name}</Text>
          </View>
          <ChevronRight size={25} className="text-primary" strokeWidth={1.5} />
        </View>
      </TouchableOpacity>
    </Link>
  );
}
