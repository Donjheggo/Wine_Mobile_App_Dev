import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Image } from "expo-image";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useState } from "react";
import { Link } from "expo-router";
import type { LoginFormT } from "~/lib/types";

export default function Signin() {
  const [form, setForm] = useState<LoginFormT>({
    email: "",
    password: "",
  });

  const handleSign = () => {
    // Add signing in logic here
    return;
  };

  return (
    <View className="items-center mt-10 gap-14">
      <Image
        source={require("../../assets/images/logo.png")}
        contentFit="contain"
        style={{ width: 300, height: 100 }}
      />
      <Text className="text-xl font-poppins-light">
        Login with your email and password.
      </Text>
      <View className="w-full gap-4">
        <View className="gap-2">
          <Label nativeID="email">Email</Label>
          <Input
            placeholder=""
            value={form.email}
            onChangeText={(e) => setForm({ ...form, email: e })}
            aria-labelledby="email"
            aria-errormessage="error-email"
            keyboardType="email-address"
          />
        </View>
        <View className=" gap-2">
          <Label nativeID="password">Password</Label>
          <Input
            placeholder=""
            value={form.password}
            onChangeText={(e) => setForm({ ...form, password: e })}
            aria-labelledby="email"
            aria-errormessage="error-email"
            secureTextEntry={true}
          />
          <Link href="/" className="underline text-muted-foreground">
            Forgot Password?
          </Link>
        </View>
        <Button size="lg" className="mt-48">
          <Text>Login</Text>
        </Button>
        <Text className="text-sm mt-3 text-muted-foreground">
          You don't have an account yet?{" "}
          <Link href="/" className="text-blue-500">
            Create an account here
          </Link>
        </Text>
      </View>
    </View>
  );
}
