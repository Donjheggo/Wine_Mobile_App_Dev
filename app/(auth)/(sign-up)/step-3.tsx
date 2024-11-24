import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { useState } from "react";
import { Camera } from "~/lib/icons/camera";
import { IdCard } from "~/lib/icons/id-card";
import { Button } from "~/components/ui/button";
import BackButton from "~/components/ui/back-button";
import CameraInput from "~/components/ui/camera-input";
import { Link } from "expo-router";
import type { RegisterStepThreeFormT } from "~/lib/types";
import * as ImagePicker from "expo-image-picker";

export default function Screen() {
  const [form, setForm] = useState<RegisterStepThreeFormT>({
    type_of_id: "",
    id_number: "",
    selfie_image: "",
    id_image: "",
  });

  const pickImage = async (field: "selfie_image" | "id_image") => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      setForm({ ...form, [field]: result.assets[0].uri });
    }
  };

  return (
    <View>
      <BackButton />
      <View className="gap-10 mt-5">
        <Progress value={60} />
        <Text className="text-xl text-center font-poppins-light">
          Just a few things just to set up your account.
        </Text>
        <View className="gap-2">
          <View className="gap-2">
            <Label>Type of ID</Label>
            <Select
              onValueChange={(value) =>
                setForm({
                  ...form,
                  type_of_id: value?.value as string,
                })
              }
            >
              <SelectTrigger>
                <SelectValue
                  className="text-foreground text-sm native:text-lg"
                  placeholder={typeOfIds[0]}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {typeOfIds.map((item, index) => (
                    <SelectItem key={index} label={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </View>
        </View>
        <View className="gap-2">
          <View className="gap-2">
            <Label>ID Number</Label>
            <Input
              value={form.id_number}
              placeholder="0000-0000-111-22"
              onChangeText={(e) => setForm({ ...form, id_number: e })}
              aria-labelledby="type_of_id"
              aria-errormessage="error-type_of_id"
              keyboardType="default"
            />
          </View>
        </View>

        <View className="gap-6">
          <CameraInput
            label="Upload a selfie"
            description="To match your face to your ID photo."
            image_uri={form.selfie_image}
            icon={Camera}
            onActivate={() => pickImage("selfie_image")}
          />

          <CameraInput
            label="Upload a picture of your valid ID."
            description="To verify your identity matches the ID."
            image_uri={form.id_image}
            icon={IdCard}
            onActivate={() => pickImage("id_image")}
          />
        </View>

        <Link href="/(auth)/(sign-up)/step-4" asChild>
          <Button size="lg" className="mt-10">
            <Text>Next</Text>
          </Button>
        </Link>
      </View>
    </View>
  );
}

const typeOfIds = ["Driver's License", "Passport", "Goverment ID"];
