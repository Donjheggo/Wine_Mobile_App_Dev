import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { View } from "react-native";
import { useState } from "react";

export default function WithdrawForm() {
  const [amount, setAmount] = useState<number | string | null>("");

  const handleSubmit = () => {
    // Add a function to submit deposit here
    return;
  };

  return (
    <View className="gap-2">
      <View className="flex-row justify-between">
        <Text className="text-sm text-muted-foreground">Amount</Text>
        <Text className="text-sm text-muted-foreground">
          Available Balance: £17,200
        </Text>
      </View>
      <Input
        placeholder="000000"
        value={String(amount)}
        className="text-center"
        keyboardType="number-pad"
        onChangeText={(e) => setAmount(Number(e))}
      />
      <Button onPress={handleSubmit} size="lg" className="mt-4 bg-red-700">
        <Text>Withdraw</Text>
      </Button>
    </View>
  );
}
