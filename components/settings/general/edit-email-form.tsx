import { View } from "react-native";
import { Input } from "../../ui/input";
import { useState } from "react";
import { Button } from "../../ui/button";
import { Text } from "../../ui/text";
import { Pencil } from "~/lib/icons/pencil";

export default function EditEmailForm() {
  const [editing, setEditing] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

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
            <Text className="text-xl">Email</Text>
            <Text className="text-muted-foreground text-lg">
              john@gmail.com
            </Text>
          </View>
          <Pencil onPress={() => setEditing(true)} className="text-muted-foreground" />
        </View>
      ) : (
        // Form here
        <View className="gap-2">
          <View className="flex-row justify-between items-center">
            <Text className="text-xl">Email</Text>
            <Button onPress={() => setEditing(false)} variant="ghost" size="sm">
              <Text>Cancel</Text>
            </Button>
          </View>
          <Input
            value={email}
            onChangeText={(e) => setEmail(e)}
            keyboardType="email-address"
            placeholder="john@gmail.com"
          />
          <Button onPress={handleSubmit} className="w-32">
            <Text>Save</Text>
          </Button>
        </View>
      )}
    </View>
  );
}
