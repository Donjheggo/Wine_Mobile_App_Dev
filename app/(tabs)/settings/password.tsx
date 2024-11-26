import { View } from "react-native";
import { Text } from "~/components/ui/text";
import EditPasswordForm from "~/components/settings/password/edit-password-form";

export default function Screen() {
  return (
    <View>
      <Text className="text-xl font-poppins-medium">Password</Text>
      <EditPasswordForm />
    </View>
  );
}
