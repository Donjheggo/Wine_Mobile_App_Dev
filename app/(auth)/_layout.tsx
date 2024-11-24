import { SafeAreaView, View } from "react-native";
import { Slot } from "expo-router";

export default function AuthLayout() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 container max-w-md mx-auto py-4 px-6 ">
        <Slot />
      </View>
    </SafeAreaView>
  );
}
