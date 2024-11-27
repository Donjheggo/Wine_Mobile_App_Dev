import { Button } from "../ui/button";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { View } from "react-native";
import { Text } from "../ui/text";

export default function NotificationCard({
  image,
  title,
  desc,
  date,
  price,
  responded,
}: any) {
  return (
    <View
      className={`${
        responded ? "bg-[#E7E8E8]" : "bg-muted"
      } border-muted rounded-xl p-4`}
    >
      <View className="flex-row gap-2">
        <View>
          <Image
            source={image}
            contentFit="contain"
            style={{ width: 30, height: 100 }}
          />
        </View>
        <View className="flex-1">
          <Text className="text-sm">{title}</Text>
          <Text className="mt-2 text-xs text-muted-foreground">{desc}</Text>
          {!responded ? (
            <View className="flex-row gap-2 mt-2">
              <Button size="sm" className="w-24">
                <Text>Accept</Text>
              </Button>
              <Button size="sm" className="bg-red-800 w-24">
                <Text>Reject</Text>
              </Button>
            </View>
          ) : (
            <Link href="/" className="mt-2">
              <Text className="text-sm text-blue-500">View now</Text>
            </Link>
          )}
        </View>
        <View className="ml-auto">
          {!responded && (
            <Text className="text-sm text-red-500">Your price:${price}</Text>
          )}

          <View className="mt-auto ml-auto">
            <Text className="text-xs text-muted-foreground">
              {new Date(date).toDateString()}
            </Text>
            <Text className="text-xs text-muted-foreground">
              {new Date(date).toTimeString()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
