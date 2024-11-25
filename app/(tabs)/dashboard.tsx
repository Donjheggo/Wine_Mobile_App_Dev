import { SafeAreaView, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";

export default function Screen() {
  return (
    <SafeAreaView className="h-full">
      <ScrollView className="flex-1 container max-w-md mx-auto py-4 px-6">
        <Text>Dashboard Screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
