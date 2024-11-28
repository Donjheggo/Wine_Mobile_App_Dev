import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  View,
} from "react-native";

export default function ScreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <View className="flex-1 container max-w-screen-xl mx-auto p-4">
          {children}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
