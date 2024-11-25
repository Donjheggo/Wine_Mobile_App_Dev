import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Pencil } from "~/lib/icons/pencil";
import EditFullnameForm from "~/components/settings/general/edit-full-name-form";
import EditEmailForm from "~/components/settings/general/edit-email-form";
import EditPhoneForm from "~/components/settings/general/edit-phone-form";

export default function Screen() {
  return (
    <View>
      <Text className="text-xl font-poppins-medium">General</Text>

      {/* Full name */}
      <EditFullnameForm />

      {/* Email */}
      <EditEmailForm />

      {/* Phone */}
      <EditPhoneForm />

      {/* Questions */}
      <Text className="text-xl font-poppins-medium mt-10">Questions</Text>
      
      <View className="mt-6 flex-row justify-between items-center">
        <Text className="text-lg">Where do you want to store the wine?</Text>
        <Pencil className="text-muted-foreground" />
      </View>

      <View className="mt-6 flex-row justify-between items-center">
        <Text className="text-lg">How much your investment?</Text>
        <Pencil className="text-muted-foreground" />
      </View>

      <View className="mt-6 flex-row justify-between items-center">
        <Text className="text-lg">Where do you want to store the wine?</Text>
        <Pencil className="text-muted-foreground" />
      </View>

      <View className="mt-6 flex-row justify-between items-center">
        <Text className="text-lg">How much is your investment?</Text>
        <Pencil className="text-muted-foreground" />
      </View>

    </View>
  );
}
