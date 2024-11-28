import { Slot } from "expo-router";
import { View, Platform, StatusBar } from "react-native";
import ScreenLayout from "~/components/layout/screen-layout";
import SuccessScreenHeader from "~/components/(success-screens)/success-screen-header";
import SuccessScreenFooter from "~/components/(success-screens)/success-screen-footer";

export default function SuccessScreenLayout() {
  return (
    <ScreenLayout>
      <View
        style={{
          // Add padding top only for Android when StatusBar is translucent
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <SuccessScreenHeader />
        <Slot />
        <SuccessScreenFooter />
      </View>
    </ScreenLayout>
  );
}
