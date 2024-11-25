import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { Image } from "expo-image";
import { useState } from "react";
import { Separator } from "~/components/ui/separator";
import BackButton from "~/components/ui/back-button";
import { router } from "expo-router";
import type { RegisterStepOneFormT } from "~/lib/types";

export default function Screen() {
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [form, setForm] = useState<RegisterStepOneFormT>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async () => {
    // Validate password
    if (form.password !== confirmPassword) {
      return;
    }
    // Add signup logic here
    router.push("/(auth)/(sign-up)/step-2");
  };

  return (
    <View>
      <BackButton />
      <View className="gap-10 mt-5">
        <Progress value={20} />
        <Text className="text-xl text-center font-poppins-light">
          We need your basic information for processing your transactions.
        </Text>
        <View className="gap-4">
          <View className="flex-row flex-wrap w-full gap-4">
            <View className="flex-1 w-[50%] gap-2">
              <Label>First Name</Label>
              <Input
                placeholder="John"
                value={form.firstname}
                onChangeText={(e) => setForm({ ...form, firstname: e })}
                aria-labelledby="firstname"
                aria-errormessage="error-firstname"
                keyboardType="default"
              />
            </View>
            <View className="flex-1 w-[50%] gap-2">
              <Label>Last Name</Label>
              <Input
                placeholder="Doe"
                value={form.lastname}
                onChangeText={(e) => setForm({ ...form, lastname: e })}
                aria-labelledby="lastname"
                aria-errormessage="error-lastname"
                keyboardType="default"
              />
            </View>
          </View>
          <View className="flex-row flex-wrap w-full gap-4">
            <View className="flex-1 w-[50%] gap-2">
              <Label>Email</Label>
              <Input
                placeholder="john@gmail.com"
                value={form.email}
                onChangeText={(e) => setForm({ ...form, email: e })}
                aria-labelledby="email"
                aria-errormessage="error-email"
                keyboardType="email-address"
              />
            </View>
            <View className="flex-1 w-[50%] gap-2">
              <Label nativeID="phone">Phone</Label>
              <Input
                placeholder="+101000-50"
                value={form.phone}
                onChangeText={(e) => setForm({ ...form, phone: e })}
                aria-labelledby="phone"
                aria-errormessage="error-phone"
                keyboardType="phone-pad"
              />
            </View>
          </View>
          <View className="gap-2">
            <Label nativeID="password">Password</Label>
            <Input
              placeholder="***************"
              value={form.password}
              onChangeText={(e) => setForm({ ...form, password: e })}
              aria-labelledby="password"
              aria-errormessage="error-password"
              keyboardType="default"
              secureTextEntry={true}
            />
          </View>
          <View className="gap-2">
            <Label nativeID="confirm-password">Confirm Password</Label>
            <Input
              placeholder="***************"
              value={confirmPassword}
              onChangeText={(e) => setConfirmPassword(e)}
              aria-labelledby="password"
              aria-errormessage="error-password"
              keyboardType="default"
              secureTextEntry={true}
            />
          </View>
          <Button onPress={handleSubmit} size="lg" className="mt-4">
            <Text>Next</Text>
          </Button>
          <View className="mt-2 flex flex-row gap-4 items-center justify-center w-full">
            <Separator className="my-4" />
            <Text className="text-gray-400">OR</Text>
            <Separator className="my-4" />
          </View>
          <View className="flex flex-row items-center justify-center gap-4">
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
    </View>
  );
}
