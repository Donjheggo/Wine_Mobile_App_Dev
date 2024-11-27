import ScreenLayout from "~/components/layout/screen-layout";
import { Text } from "~/components/ui/text";
import NotificationCard from "~/components/notification/notification-card";
import { MockNotifications } from "~/lib/mock-data";
import { View } from "react-native";

export default function Screen() {
  return (
    <ScreenLayout>
      <Text className="text-xl font-poppins-medium">Notification</Text>
      <View className="gap-2 mt-4">
        {MockNotifications.map((item, index) => (
          <NotificationCard
            key={index}
            responded={item.responded}
            date={item.date}
            title={item.title}
            image={item.image}
            price={item.price}
            desc={item.desc}
          />
        ))}
      </View>
    </ScreenLayout>
  );
}
