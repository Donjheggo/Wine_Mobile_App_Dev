import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl">Default Font</Text>
      <Text className="text-2xl font-poppins-light">Poppins Light Font</Text>
      <Text className="text-2xl font-poppins-regular">
        Poppins Regular Font
      </Text>
      <Text className="text-2xl font-poppins-medium">Poppins Medium Font</Text>
      <Text className="text-2xl font-poppins-semibold">
        Poppins SemiBold Font
      </Text>
      <Text className="text-2xl font-bold">Poppins Bold</Text>
    </View>
  );
}
