import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { PortalHost } from "@rn-primitives/portal";
import Toast from "react-native-toast-message";
import { toastConfig } from "~/components/ui/toast-config";
import "../global.css";

export default function RootLayout() {
  const [loaded] = useFonts({
    Light: require("../assets/fonts/Poppins-Light.ttf"),
    Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    Medium: require("../assets/fonts/Poppins-Medium.ttf"),
    SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    Bold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(success-screens)" />
      </Stack>
      <PortalHost />
      <Toast position="top" topOffset={100} config={toastConfig} />
    </>
  );
}
