import { View } from "react-native";
import { Input } from "../../ui/input";
import { useState } from "react";
import { Button } from "../../ui/button";
import { Text } from "../../ui/text";
import { Pencil } from "~/lib/icons/pencil";

export default function EditFullnameForm() {
  const [editing, setEditing] = useState<boolean>(false);
  const [form, setForm] = useState<{ first_name: string; last_name: string }>({
    first_name: "",
    last_name: "",
  });

  const handleSubmit = async () => {
    try {
      // add function for editing
      setEditing(false);
    } catch (error) {
      console.error(error);
    }
    return;
  };

  return (
    <View className="mt-6">
      {!editing ? (
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-xl">Full name</Text>
            <Text className="text-muted-foreground text-lg">John Doe</Text>
          </View>
          <Pencil
            onPress={() => setEditing(true)}
            className="text-muted-foreground"
          />
        </View>
      ) : (
        // Form Field
        <View className="gap-2">
          <View className="flex-row justify-between items-center">
            <Text className="text-xl">Full name</Text>
            <Button onPress={() => setEditing(false)} variant="ghost" size="sm">
              <Text>Cancel</Text>
            </Button>
          </View>
          <Input
            value={form.first_name}
            onChangeText={(e) => setForm({ ...form, first_name: e })}
            keyboardType="default"
            placeholder="John"
          />
          <Input
            value={form.last_name}
            onChangeText={(e) => setForm({ ...form, last_name: e })}
            keyboardType="default"
            placeholder="Doe"
          />
          <Button onPress={handleSubmit} className="w-32">
            <Text>Save</Text>
          </Button>
        </View>
      )}
    </View>
  );
}
