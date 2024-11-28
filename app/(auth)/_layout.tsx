import { Slot } from "expo-router";
import ScreenLayout from "~/components/layout/screen-layout";
import { View, ScrollView } from "react-native";

export default function ScreensLayout() {
  return (
    <ScreenLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="container max-w-md mx-auto">
          <Slot />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}
