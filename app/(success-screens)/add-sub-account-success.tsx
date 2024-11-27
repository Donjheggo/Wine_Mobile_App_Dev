import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Screen() {
  // Will redirect to settings screen after 2 seconds
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/(tabs)/settings");
    }, 2000);

    return () => clearTimeout(redirectTimer);
  });

  return (
    <View>
      <Text className="text-center text-xl">
        Successfully created a sub-account!
      </Text>
      <Text className="mt-4 first:text-muted-foreground text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </Text>
    </View>
  );
}
