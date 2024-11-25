import { Link } from "expo-router";
import { View } from "react-native";
import { ShoppingCart } from "~/lib/icons/shopping-cart";
import { Text } from "../ui/text";

export default function CartButton({ count }: { count: number }) {
  return (
    <Link href="/(tabs)/cart">
      <View className="relative">
        {count > 0 && (
          <View className="absolute -top-2 -right-2 bg-green-500 rounded-full px-1.5 py-0.5">
            <Text className="text-white text-xs">{count}</Text>
          </View>
        )}
        <ShoppingCart color="#8e8e8f" size={25} strokeWidth={1.7} />
      </View>
    </Link>
  );
}
