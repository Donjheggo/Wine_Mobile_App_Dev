import { View } from "react-native";
import { Input } from "../../ui/input";
import { useState } from "react";
import { Button } from "../../ui/button";
import { Text } from "../../ui/text";
import { Pencil } from "~/lib/icons/pencil";

export default function EditPhoneForm() {
  const [editing, setEditing] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");

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
            <Text className="text-xl">Phone</Text>
            <Text className="text-muted-foreground text-lg">
              +110100-110-20
            </Text>
          </View>
          <Pencil
            onPress={() => setEditing(true)}
            className="text-muted-foreground"
          />
        </View>
      ) : (
        // Form here
        <View className="gap-2 mt-6">
          <View className="flex-row justify-between items-center">
            <Text className="text-xl">Phone</Text>
            <Button onPress={() => setEditing(false)} variant="ghost" size="sm">
              <Text>Cancel</Text>
            </Button>
          </View>
          <Input
            value={phone}
            onChangeText={(e) => setPhone(e)}
            keyboardType="default"
            placeholder="+110100-110-20"
          />
          <Button onPress={handleSubmit} className="w-32">
            <Text>Save</Text>
          </Button>
        </View>
      )}
    </View>
  );
}
