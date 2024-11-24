import { TouchableOpacity, View } from "react-native";
import { Label } from "./label";
import { Text } from "./text";
import { Image } from "expo-image";
import { CameraInputPropsT } from "~/lib/types";

export default function CameraInput({
  label,
  description,
  icon: Icon,
  onActivate,
  image_uri,
}: CameraInputPropsT) {
  return (
    <TouchableOpacity
      onPress={onActivate}
      className="gap-4 flex-row items-center"
    >
      {image_uri ? (
        <Image
          source={{ uri: image_uri }}
          contentFit="fill"
          style={{ width: 50, height: 50 }}
        />
      ) : (
        <Icon className="text-gray-600" strokeWidth={1.2} size={40} />
      )}

      <View className="flex-1">
        <Label>{label}</Label>
        <Text className="text-xs text-muted-foreground">{description}</Text>
      </View>
    </TouchableOpacity>
  );
}
