import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { CircleCheck } from "~/lib/icons/circle-check";

export default function Screen() {
  return (
    <View>
      <Text className="text-xl text-center font-poppins-light">
        Recovery email sent with link.
      </Text>
      <Text className="text-center mt-4 text-muted-foreground text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </Text>
      <View className="items-center mt-5">
        <CircleCheck className="text-[#1BCD32]" size={130} />
      </View>
      <Text className="mt-10 text-center text-muted-foreground">
        Please check your email!
      </Text>
    </View>
  );
}
