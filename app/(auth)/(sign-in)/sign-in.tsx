import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useState } from "react";
import { Link } from "expo-router";
import { router } from "expo-router";
import type { LoginFormT } from "~/lib/types";

export default function Signin() {
  const [form, setForm] = useState<LoginFormT>({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    // Add signing in logic here
    router.push("/(auth)/(sign-in)/mfa-confirmation");
  };

  return (
    <View className="items-center gap-14">
      <Text className="text-xl font-poppins-light">
        Login with your email and password.
      </Text>
      <View className="w-full gap-4">
        <View className="gap-2">
          <Label nativeID="email">Email</Label>
          <Input
            placeholder="johndoe@gmail.com"
            value={form.email}
            onChangeText={(e) => setForm({ ...form, email: e })}
            aria-labelledby="email"
            aria-errormessage="error-email"
            keyboardType="email-address"
          />
        </View>
        <View className="gap-2">
          <Label nativeID="password">Password</Label>
          <Input
            placeholder="**************"
            value={form.password}
            onChangeText={(e) => setForm({ ...form, password: e })}
            aria-labelledby="password"
            aria-errormessage="error-password"
            secureTextEntry={true}
          />
          <Link href="/" className="underline text-muted-foreground">
            Forgot Password?
          </Link>
        </View>
        <Button onPress={handleSubmit} size="lg" className="mt-48">
          <Text>Login</Text>
        </Button>
        <Text className="text-sm mt-3 text-muted-foreground">
          You don't have an account yet?{" "}
          <Link href="/(auth)/(sign-up)/step-1" className="text-blue-500">
            Create an account here
          </Link>
        </Text>
      </View>
    </View>
  );
}
