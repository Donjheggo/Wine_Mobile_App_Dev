import { Text, View } from "react-native";
import { Sun } from "lucide-react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-2xl">Initialized Nativewind</Text>
      <Sun />
    </View>
  );
}
