import { Link } from "expo-router";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { useState } from "react";
import { Separator } from "~/components/ui/separator";
import { Image } from "expo-image";
import { router } from "expo-router";

export default function Screen() {
  const [sixDigitCode, setSixDigitCode] = useState<string>();

  const handleSubmit = async () => {
    // Add confirmation validation here
    router.push("/(tabs)/dashboard");
  };

  return (
    <View className="mt-20">
      <View className="gap-2">
        <Label className="text-center">
          Enter the <Text className="text-primary">6 digit code</Text> from your
          authenticator
        </Label>
        <Input
          value={sixDigitCode}
          placeholder="******"
          keyboardType="number-pad"
          onChangeText={(e) => setSixDigitCode(e)}
          className="text-center"
        />
      </View>
      <View className="mt-2">
        <Text className="text-muted-foreground text-xs">
          Lost access to your Authenticator?{" "}
          <Link href="/" className="underline text-primary">
            Contact us
          </Link>{" "}
          or{" "}
          <Link href="/(auth)/(mfa)/mfa-recovery-methods" className="underline">
            Recover it
          </Link>
        </Text>
      </View>
      <View className="mt-36">
        <Button onPress={handleSubmit} size="lg" className="mt-10">
          <Text>Login</Text>
        </Button>
        <View className="mt-6 flex flex-row gap-4 items-center justify-center w-full">
          <Separator className="my-4" />
          <Text className="text-gray-400">OR</Text>
          <Separator className="my-4" />
        </View>
        <View className="flex flex-row justify-center items-center gap-4 mt-4">
          <Image
            source={require("~/assets/icons/facebook.svg")}
            contentFit="contain"
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={require("~/assets/icons/google.png")}
            contentFit="contain"
            style={{ width: 40, height: 50 }}
          />
        </View>
      </View>
    </View>
  );
}
