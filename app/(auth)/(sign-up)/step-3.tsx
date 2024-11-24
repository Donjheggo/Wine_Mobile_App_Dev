import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { View, Modal } from "react-native";
import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { useState } from "react";
import { Camera } from "~/lib/icons/camera";
import { IdCard } from "~/lib/icons/id-card";
import { Button } from "~/components/ui/button";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { SwitchCamera } from "~/lib/icons/switch-camera";
import { X } from "~/lib/icons/x";
import type { RegisterStepThreeFormT } from "~/lib/types";
import BackButton from "~/components/ui/back-button";
import CameraInput from "~/components/ui/camera-input";
import { Link } from "expo-router";

export default function Screen() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [activeCamera, setActiveCamera] = useState<"selfie" | "id" | null>(
    null
  );
  const [form, setForm] = useState<RegisterStepThreeFormT>({
    type_of_id: "",
    id_number: "",
    selfie_image: "",
    id_image: "",
  });

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const closeCamera = () => setActiveCamera(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  const captureImage = async () => {
    // Add expo-camera logic for capturing image
    let uri = "";

    setForm((prevState) => {
      if (activeCamera === "selfie") {
        return { ...prevState, selfie_image: uri };
      }
      if (activeCamera === "id") {
        return { ...prevState, id_image: uri };
      }
      return prevState;
    });

    closeCamera();
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

        {!permission.granted ? (
          <View>
            <Text className="text-center">
              We need your permission to show the camera
            </Text>
            <Button
              onPress={requestPermission}
              variant="outline"
              className="mt-4"
            >
              <Text>Grant Permission</Text>
            </Button>
          </View>
        ) : (
          <View className="gap-6">
            {/* Camera input for selfie */}
            <CameraInput
              label="Take a selfie"
              description="To match your face to your ID photo."
              icon={Camera}
              onActivate={() => setActiveCamera("selfie")}
            />

            {/* Camera input for ID */}
            <CameraInput
              label="Take a picture of your valid ID."
              description="To verify your identity matches the ID."
              icon={IdCard}
              onActivate={() => setActiveCamera("id")}
            />
          </View>
        )}

        {activeCamera && (
          <Modal visible={true} animationType="slide">
            <View className="flex-1">
              <CameraView facing={facing} style={{ flex: 1 }}>
                {/* Close Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  onPress={closeCamera}
                  className="absolute top-20 left-5"
                >
                  <X className="text-primary" size={35} />
                </Button>
                {/* Switch Camera Button */}
                <Button
                  size="icon"
                  className="absolute top-20 right-5"
                  variant="ghost"
                  onPress={toggleCameraFacing}
                >
                  <SwitchCamera className="text-primary" size={35} />
                </Button>
                {/* Capture Button */}
                <Button
                  onPress={captureImage}
                  size="icon"
                  variant="ghost"
                  className="w-full absolute bottom-10 left-0 right-0"
                >
                  <Camera className="text-primary" size={35} />
                </Button>
              </CameraView>
            </View>
          </Modal>
        )}
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
