import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { X } from "~/lib/icons/x";

export default function SupportModalHeader({
  modalVisible,
}: {
  modalVisible: () => void;
}) {
  return (
    <View className="flex-row gap-4">
      <View className="flex-1">
        <Text className="text-xl font-poppins-medium">Submit a ticket</Text>
        <Text className="text-sm text-muted-foreground">
          We will contact you via email or phone in 1-2 business days.
        </Text>
      </View>
      <X className="ml-auto text-muted-foreground" onPress={modalVisible} />
    </View>
  );
}
