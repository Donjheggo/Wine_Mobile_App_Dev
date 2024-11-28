import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";

export default function ScreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={0}
      >
        <View className="flex-1 container max-w-screen-xl mx-auto p-4">
          {children}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
