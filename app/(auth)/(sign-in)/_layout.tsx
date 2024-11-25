import { View } from "react-native";
import { Slot } from "expo-router";
import { Image } from "expo-image";

export default function SigninLayout() {
  return (
    <>
      <View className="items-center">
        <Image
          source={require("~/assets/images/logo.png")}
          contentFit="contain"
          style={{ width: 300, height: 200 }}
        />
      </View>
      <Slot />
    </>
  );
}
