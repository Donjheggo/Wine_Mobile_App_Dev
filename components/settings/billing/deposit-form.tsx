import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { View } from "react-native";
import { useState } from "react";

export default function DepositForm() {
  const [amount, setAmount] = useState<number | string | null>("");

  const handleSubmit = () => {
    // Add a function to submit deposit here
    return;
  };

  return (
    <View className="gap-2">
      <Text className="text-sm text-muted-foreground">
        Done depositing? Enter the exact amount and click to verify.
      </Text>
      <Input
        placeholder="000000"
        value={String(amount)}
        className="text-center"
        keyboardType="number-pad"
        onChangeText={(e) => setAmount(Number(e))}
      />
      <Button onPress={handleSubmit} size="lg" className="mt-4">
        <Text>Verify Deposit</Text>
      </Button>
    </View>
  );
}
