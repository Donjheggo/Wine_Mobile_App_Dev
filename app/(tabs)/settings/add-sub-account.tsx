import { View, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import AddSubAccountForm from "~/components/settings/sub-account/add-sub-account-form";

export default function Screen() {
  return (
    <ScrollView>
      <View className="gap-3">
        <Text className="text-xl font-poppins-medium">Add sub-account</Text>
        <Text className="mt-10 text-lg text-center">
          We need your basic information for creating sub-account.
        </Text>
        <AddSubAccountForm />
      </View>
    </ScrollView>
  );
}
