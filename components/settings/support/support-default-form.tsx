import { View } from "react-native";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { Text } from "~/components/ui/text";
import type { SupportDefaultFormT } from "~/lib/types";

export default function SupportDefaultForm({
  modalVisible,
}: {
  modalVisible: () => void;
}) {
  const [form, setForm] = useState<SupportDefaultFormT>({
    first_name: "",
    last_name: "",
    inquiry: "",
  });

  return (
    <View className="mt-6 gap-4">
      <View className="flex-row justify-between gap-4">
        <View className="flex-1 gap-2">
          <Label>First Name</Label>
          <Input
            placeholder="John"
            value={form.first_name}
            onChangeText={(e) => setForm({ ...form, first_name: e })}
          />
        </View>
        <View className="flex-1 gap-2">
          <Label>Last Name</Label>
          <Input
            placeholder="Doe"
            value={form.last_name}
            onChangeText={(e) => setForm({ ...form, last_name: e })}
          />
        </View>
      </View>
      <View>
        <Label>Your Inquiry</Label>
        <Textarea
          value={form.inquiry}
          onChangeText={(e) => setForm({ ...form, inquiry: e })}
        />
      </View>
      <View className="flex-1 flex-row justify-between gap-4">
        <Button
          size="lg"
          onPress={modalVisible}
          variant="outline"
          className="flex-1"
        >
          <Text> Cancel</Text>
        </Button>
        <Button size="lg" className="flex-1">
          <Text>Submit</Text>
        </Button>
      </View>
    </View>
  );
}
