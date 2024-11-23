import { TouchableOpacity, View } from "react-native";
import { Label } from "./ui/label";
import { Text } from "./ui/text";

export default function CameraInput({
  label,
  description,
  icon: Icon,
  onActivate,
}: {
  label: string;
  description: string;
  icon: React.ElementType;
  onActivate: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onActivate}
      className="gap-4 flex-row items-center"
    >
      <Icon className="text-gray-600" strokeWidth={1.2} size={40} />
      <View className="flex-1">
        <Label>{label}</Label>
        <Text className="text-xs text-muted-foreground">{description}</Text>
      </View>
    </TouchableOpacity>
  );
}
