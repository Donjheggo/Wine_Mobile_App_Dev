import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { View, Platform } from "react-native";
import { Text } from "~/components/ui/text";
import { useState } from "react";
import { router } from "expo-router";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import type { AddSubAccountFormT } from "~/lib/types";

export default function AddSubAccountForm() {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [form, setForm] = useState<AddSubAccountFormT>({
    first_name: "",
    last_name: "",
    birth_date: new Date(),
    email: "",
    phone: "",
  });

  const handleSubmit = async () => {
    try {
      // Add request function here
      console.log("Form ", form);
      router.push("/(success-screens)/add-sub-account-success");
    } catch (error) {
      console.error(error);
    }
    return;
  };

  return (
    <View className="gap-4">
      <View className="gap-2">
        <Label className="text-lg">First Name</Label>
        <Input
          value={form.first_name}
          placeholder="John"
          keyboardType="default"
          onChangeText={(e) => setForm({ ...form, first_name: e })}
        />
      </View>
      <View className="gap-2">
        <Label className="text-lg">Last Name</Label>
        <Input
          value={form.last_name}
          placeholder="Doe"
          keyboardType="default"
          onChangeText={(e) => setForm({ ...form, last_name: e })}
        />
      </View>
      <View className="gap-2">
        <Label className="text-lg">Birth Date</Label>
        {Platform.OS === "android" && (
          <Button
            variant="outline"
            onPress={() => setShowDatePicker(!showDatePicker)}
            className="bg-transparent w-1/4"
          >
            <Text>{new Date(form.birth_date).toLocaleDateString()}</Text>
          </Button>
        )}
        {(showDatePicker || Platform.OS === "ios") && (
          <View className="mr-auto">
            <RNDateTimePicker
              value={form.birth_date}
              display="default"
              mode="date"
              onChange={(_, selectedDate) => {
                if (selectedDate) {
                  setForm({ ...form, birth_date: selectedDate });
                  setShowDatePicker(false);
                }
              }}
            />
          </View>
        )}
      </View>
      <View className="gap-2">
        <Label className="text-lg">Phone</Label>
        <Input
          value={form.phone}
          placeholder="+110 10000"
          keyboardType="default"
          onChangeText={(e) => setForm({ ...form, phone: e })}
        />
      </View>
      <Button onPress={handleSubmit} size="lg" className="mt-28">
        <Text>Next</Text>
      </Button>
    </View>
  );
}
