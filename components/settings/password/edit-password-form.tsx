import { View } from "react-native";
import { Input } from "../../ui/input";
import { useState } from "react";
import { Button } from "../../ui/button";
import { Text } from "../../ui/text";
import { Pencil } from "~/lib/icons/pencil";

export default function EditPasswordForm() {
  const [editing, setEditing] = useState<boolean>(false);
  const [form, setForm] = useState<{
    current_password: string;
    new_password: string;
    confirm_new_password: string;
  }>({
    current_password: "",
    new_password: "",
    confirm_new_password: "",
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
    <View className="mt-4">
      {!editing ? (
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-xl">Password</Text>
            <Text className="text-muted-foreground text-lg">*********</Text>
          </View>
          <Pencil
            onPress={() => setEditing(true)}
            className="text-muted-foreground"
          />
        </View>
      ) : (
        // Form here
        <View className="gap-2">
          <View>
            <View className="flex-row justify-between items-center">
              <Text className="text-xl">Current Password</Text>
              <Button
                onPress={() => setEditing(false)}
                variant="ghost"
                size="sm"
              >
                <Text>Cancel</Text>
              </Button>
            </View>
            <Input
              value={form.current_password}
              onChangeText={(e) => setForm({ ...form, current_password: e })}
              keyboardType="default"
              secureTextEntry={true}
              placeholder="***********"
            />
          </View>
          <View className="gap-2">
            <Text className="text-xl">New Password</Text>
            <Input
              value={form.new_password}
              onChangeText={(e) => setForm({ ...form, new_password: e })}
              keyboardType="default"
              secureTextEntry={true}
              placeholder="***********"
            />
          </View>
          <View className="gap-2">
            <Text className="text-xl">Confirm Password</Text>
            <Input
              value={form.confirm_new_password}
              onChangeText={(e) =>
                setForm({ ...form, confirm_new_password: e })
              }
              keyboardType="default"
              secureTextEntry={true}
              placeholder="***********"
            />
          </View>
          <Button onPress={handleSubmit} className="w-32">
            <Text>Save</Text>
          </Button>
        </View>
      )}
    </View>
  );
}
