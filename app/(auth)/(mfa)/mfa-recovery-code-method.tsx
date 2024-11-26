import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Link } from "expo-router";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { router } from "expo-router";

export default function Screen() {
  const [sixDigitCode, setSixDigitCode] = useState<string>("");

  const handleSubmit = () => {
    try {
      // Add function here
      router.push("/(success-screens)/mfa-recovery-success");
    } catch (error) {
      console.error(error);
      return;
    }
    return;
  };

  return (
    <View>
      <Text className="text-xl text-center font-poppins-light">
        Code Method
      </Text>
      <Text className="text-center mt-4 text-muted-foreground text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </Text>
      <View className="mt-10 gap-2">
        <Label className="text-center">Enter your recovery code</Label>
        <Input
          value={sixDigitCode}
          placeholder="******"
          keyboardType="number-pad"
          onChangeText={(e) => setSixDigitCode(e)}
          className="text-center"
        />
        <Text className="text-sm text-muted-foreground text-center">
          Already have access?{" "}
          <Link href="/(auth)/(sign-in)/sign-in" className="text-primary">
            Login
          </Link>
        </Text>
      </View>
      <Button onPress={handleSubmit} size="lg" className="mt-36">
        <Text>Recover</Text>
      </Button>
    </View>
  );
}
