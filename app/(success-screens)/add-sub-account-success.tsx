import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { CircleCheck } from "~/lib/icons/circle-check";
import { useEffect } from "react";
import { router } from "expo-router";
import CustomLoader from "~/components/ui/loader";
import { Image } from "expo-image";

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
      <View className="items-center">
        <Image
          source={require("~/assets/images/logo.png")}
          contentFit="contain"
          style={{ width: 300, height: 200 }}
        />
      </View>
      <Text className="text-center text-xl">
        Successfully created a sub-account!
      </Text>
      <Text className="mt-4 first:text-muted-foreground text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </Text>
      <View className="items-center mt-5">
        <CircleCheck className="text-[#1BCD32]" size={130} />
      </View>
      <Text className="mt-14 text-center text-muted-foreground">
        Redirecting within few seconds...
      </Text>
      <View className="items-center mt-4">
        <CustomLoader />
      </View>
    </View>
  );
}
