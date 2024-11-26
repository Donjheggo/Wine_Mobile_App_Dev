import { View } from "react-native";
import { Slot } from "expo-router";
import BackButton from "~/components/ui/back-button";

export default function SignupLayout() {
  return (
    <View>
      <BackButton />
      <Slot />
    </View>
  );
}
