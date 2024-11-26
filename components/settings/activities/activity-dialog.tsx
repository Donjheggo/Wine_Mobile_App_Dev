import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { Text } from "~/components/ui/text";
import { Image } from "expo-image";
import { View } from "react-native";
import type { ActivityDialogPropsT } from "~/lib/types";

export default function ActivityDialog({
  item,
  children,
}: {
  item: ActivityDialogPropsT;
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-w-full">
        <View className="flex-row gap-4 items-center">
          <View>
            <Image
              source={item.image}
              contentFit="contain"
              style={{ width: 50, height: 100 }}
            />
          </View>
          <View className="py-4 flex-1">
            <Text className="text-lg font-poppins-medium">{item.activity}</Text>
            <Text className="mt-4 text-lg font-poppins-medium">
              Market Price: ${item.price}
            </Text>
          </View>
        </View>
      </DialogContent>
    </Dialog>
  );
}
