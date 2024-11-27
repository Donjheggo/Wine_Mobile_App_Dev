import { Slot } from "expo-router";
import ScreenLayout from "~/components/layout/screen-layout";
import { View } from "react-native";

export default function ScreensLayout() {
  return (
    <ScreenLayout>
      <View className="container max-w-md mx-auto">
        <Slot />
      </View>
    </ScreenLayout>
  );
}
