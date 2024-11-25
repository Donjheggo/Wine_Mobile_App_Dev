import { View } from "react-native";
import NotificationButton from "./notification-button";
import CartButton from "./cart-button";
import SettingsButton from "./settings-button";

export default function TabsRightHeader() {
  return (
    <View className="flex-row gap-4 px-4 items-center mb-5">
      <NotificationButton count={3} />
      <CartButton count={8} />
      <SettingsButton />
    </View>
  );
}
