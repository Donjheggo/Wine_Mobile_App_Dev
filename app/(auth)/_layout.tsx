import {
  SafeAreaView,
  View,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";
import { Slot } from "expo-router";

export default function AuthLayout() {
  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{
        // Add padding top only for Android when StatusBar is translucent
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={0}
      >
        <ScrollView
          className="flex-1"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 container max-w-md mx-auto py-4 px-6 ">
            <Slot />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
