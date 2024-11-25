import { Link } from "expo-router";
import { View } from "react-native";
import { Bell } from "~/lib/icons/bell";
import { Text } from "../ui/text";

export default function NotificationButton({ count }: { count: number }) {
  return (
    <View className="relative">
      {count > 0 && (
        <View className="absolute -top-2 -right-2 bg-red-500 rounded-full px-1.5 py-0.5">
          <Text className="text-white text-xs">{count}</Text>
        </View>
      )}
      <Link href="/">
        <Bell color="#8e8e8f" size={30} strokeWidth={1.7} />
      </Link>
    </View>
  );
}
