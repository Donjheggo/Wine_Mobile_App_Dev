import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { Image } from "expo-image";
import { router } from "expo-router";
import type { RegisterStepFourFormT } from "~/lib/types";

export default function Screen() {
  const [form, setForm] = useState<RegisterStepFourFormT>({
    full_name: "",
    card_number: "",
    expiry_date: "",
    cvc: "",
  });

  const handleSubmit = () => {
    try {
      // Add function here
      router.push("/(success-screens)/sign-up-success");
    } catch (error) {
      console.error(error);
      return;
    }
    return;
  };

  return (
    <View className="mt-5">
      <Progress value={100} />
      <Text className="mt-4 text-xl text-center font-poppins-light">
        Set up debit card for management fees
      </Text>
      <Text className="mt-4 text-muted-foreground text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </Text>
      <View className="items-center">
        <Image
          source={require("~/assets/images/card.png")}
          contentFit="contain"
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View className="gap-4">
        <View className="gap-2">
          <Label>Full name</Label>
          <Input
            value={form.full_name}
            placeholder="John Doe"
            keyboardType="default"
            onChangeText={(e) => setForm({ ...form, full_name: e })}
          />
        </View>
        <View className="gap-2">
          <Label>Card Number</Label>
          <Input
            value={form.card_number}
            placeholder="5012-****-****-***"
            keyboardType="default"
            onChangeText={(e) => setForm({ ...form, card_number: e })}
          />
        </View>
        <View className="flex-row gap-4">
          <View className="gap-2 flex-1 w-[50%]">
            <Label>Expiry Date</Label>
            <Input
              value={String(form.expiry_date)}
              placeholder="12 / 24"
              keyboardType="default"
              onChangeText={(e) => setForm({ ...form, expiry_date: e })}
            />
          </View>
          <View className="gap-2 flex-1 w-[50%]">
            <Label>CVC</Label>
            <Input
              value={form.cvc}
              placeholder="123"
              keyboardType="default"
              onChangeText={(e) => setForm({ ...form, cvc: e })}
            />
          </View>
        </View>
      </View>
      <Button onPress={handleSubmit} size="lg" className="mt-10">
        <Text>Create Account</Text>
      </Button>
    </View>
  );
}
