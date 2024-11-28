import { View } from "react-native";
import { Image } from "expo-image";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Separator } from "~/components/ui/separator";
import { Link } from "expo-router";
import ScreenLayout from "~/components/layout/screen-layout";

export default function Index() {
  return (
    <ScreenLayout>
      <View className="container max-w-md mx-auto p-2 justify-center items-center">
        <Image
          source={require("../assets/images/logo.png")}
          contentFit="contain"
          style={{ width: 300, height: 300 }}
        />
        <Link href="/(auth)/(sign-up)" asChild>
          <Button variant="default" size="lg" className="w-full">
            <Text>Create an Account</Text>
          </Button>
        </Link>
        <View className="mt-6 flex flex-row gap-4 items-center justify-center w-full">
          <Separator className="my-4" />
          <Text className="text-gray-400">OR</Text>
          <Separator className="my-4" />
        </View>
        <View className="flex flex-row items-center gap-4 mt-4">
          <Image
            source={require("../assets/icons/facebook.svg")}
            contentFit="contain"
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={require("../assets/icons/google.png")}
            contentFit="contain"
            style={{ width: 40, height: 50 }}
          />
        </View>
        <View className="mt-48">
          <Text>
            Already have an account?{" "}
            <Link href="/(auth)/(sign-in)" className="text-blue-500">
              Signin
            </Link>
          </Text>
        </View>
      </View>
    </ScreenLayout>
  );
}
