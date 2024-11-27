import { View } from "react-native";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { Text } from "~/components/ui/text";
import { Image } from "expo-image";

export default function SupportVipForm({
  modalVisible,
}: {
  modalVisible: () => void;
}) {
  const [inquiry, setInquiry] = useState<string>("");

  return (
    <View className="mt-6 gap-10">
      <View className="flex-row items-center gap-3">
        <View className="rounded-full overflow-hidden">
          <Image
            source={require("~/assets/images/contact-user.jpg")}
            contentFit="contain"
            style={{ width: 50, height: 50 }}
            className="border border-red-300"
          />
        </View>
        <View>
          <Text className="text-lg">John Doe</Text>
          <Text className="text-sm text-muted-foreground">
            Vintage associates
          </Text>
          <Text className="text-sm text-muted-foreground">account manager</Text>
        </View>
        <View className="ml-auto">
          <Text className="text-lg">Contact Details</Text>
          <Text className="text-sm text-muted-foreground">+10101550-454</Text>
          <Text className="text-sm text-muted-foreground">
            johndoe@gmail.com
          </Text>
        </View>
      </View>
      <View className="items-center">
        <Text className="text-lg">Or submit a ticket</Text>
        <Text className="text-muted-foreground">
          This will email directly to your account manager
        </Text>
      </View>
      <View>
        <Label>Your Inquiry</Label>
        <Textarea value={inquiry} onChangeText={(e) => setInquiry(e)} />
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
