import { SafeAreaView, ScrollView, View } from "react-native";
import { Slot } from "expo-router";

export default function AuthLayout() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="container max-w-md mx-auto p-4">
          <Slot />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
