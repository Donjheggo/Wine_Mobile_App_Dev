import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";
import BackButton from "~/components/ui/back-button";

export default function Screen() {
  return (
    <View>
      <BackButton />
      <View className="gap-10 mt-5">
        <Progress value={100} />
        <Text className="text-xl text-center font-poppins-light">
          Step 5
        </Text>
      </View>
    </View>
  );
}
