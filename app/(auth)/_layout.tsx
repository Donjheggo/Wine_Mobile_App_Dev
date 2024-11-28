import { Slot } from "expo-router";
import ScreenLayout from "~/components/layout/screen-layout";
import { View, ScrollView, Platform, StatusBar } from "react-native";

export default function ScreensLayout() {
  return (
    <ScreenLayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          // Add padding top only for Android when StatusBar is translucent
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <View className="container max-w-md mx-auto">
          <Slot />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}
