import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Slot } from "expo-router";

export default function SignupLayout() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
      keyboardVerticalOffset={0}
    >
      <ScrollView className="flex-1">
        <Slot />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
