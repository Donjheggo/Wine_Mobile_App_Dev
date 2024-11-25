import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";
import { Image } from "expo-image";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { useState } from "react";
import { Link } from "expo-router";
import BackButton from "~/components/ui/back-button";
import { Button } from "~/components/ui/button";

export default function Screen() {
  const [sixDigitCode, setSixDigitCode] = useState<string>("");

  return (
    <View className="flex-1">
      <BackButton />
      <View className="gap-10 mt-5">
        <Progress value={80} />
        <Text className="text-xl text-center font-poppins-light">
          Set up two factor authentication (Required)
        </Text>
        <Text className="text-muted-foreground text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
        <View className="items-center">
          <Image
            contentFit="fill"
            source={require("~/assets/images/qr-code.png")}
            style={{ width: 150, height: 150 }}
          />
          <View className="mt-10 gap-4 w-full">
            <Label>
              Enter the <Text className="text-primary">6 digit code</Text> from
              your authenticator
            </Label>
            <Input
              value={sixDigitCode}
              placeholder="******"
              keyboardType="number-pad"
              onChangeText={(e) => setSixDigitCode(e)}
              className="text-center"
            />
            <View>
              <Text className="text-muted-foreground text-xs">
                Lost access to your Authenticator?{" "}
                <Link href="/" className="underline text-primary">
                  Contact us
                </Link>{" "}
                or{" "}
                <Link href="/" className="underline">
                  Recover it
                </Link>
              </Text>
            </View>
            <Link href="/(overview)/(auth)/(sign-up)/step-5" asChild>
              <Button size="lg" className="mt-10">
                <Text>Next</Text>
              </Button>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
