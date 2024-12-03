import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function WineCardButtons({
  setBuyNowModalVisible,
  setAddToCartModalVisible,
}: {
  setBuyNowModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setAddToCartModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <View className="mt-4 flex-row items-center gap-2 justify-between ">
      <Button
        onPress={() => setBuyNowModalVisible(true)}
        variant="outline"
        className="flex-1"
      >
        <Text>Buy Now</Text>
      </Button>
      <Button className="flex-1" onPress={() => setAddToCartModalVisible(true)}>
        <Text>Add to Cart</Text>
      </Button>
    </View>
  );
}
