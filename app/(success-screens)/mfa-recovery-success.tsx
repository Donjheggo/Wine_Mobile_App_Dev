import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Screen() {
  // Will redirect to sign-in screen after 2 seconds
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/(auth)/(sign-in)");
    }, 2000);

    return () => clearTimeout(redirectTimer);
  });

  return (
    <View>
      <Text className="text-xl text-center font-poppins-light">
        Recovery Success!
      </Text>
      <Text className="text-center mt-4 text-muted-foreground text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </Text>
    </View>
  );
}
