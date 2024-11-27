import ScreenLayout from "~/components/layout/screen-layout";
import { Text } from "~/components/ui/text";
import NotificationCard from "~/components/notification/notification-card";
import { MockNotifications } from "~/lib/mock-data";
import { View } from "react-native";

export default function Screen() {
  const today = new Date();

  // Filter notification within less than 7 days ago
  const last_7_days = MockNotifications.filter((notification) => {
    const diffTime = Math.abs(today.getTime() - notification.date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  });

  // Filter notification within more than 7 days ago
  const weeks_ago = MockNotifications.filter((notification) => {
    const diffTime = Math.abs(today.getTime() - notification.date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 7;
  });

  return (
    <ScreenLayout>
      <Text className="text-xl font-poppins-medium">Notification</Text>
      <View className="gap-2 mt-4">
        {/* Last 7 days notification */}
        <Text>Last 7 days</Text>
        {last_7_days.map((item, index) => (
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
        <View className="gap-2 mt-4">
          {/* More than 7 days notification */}
          <Text>Weeks ago</Text>
          {weeks_ago.map((item, index) => (
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
      </View>
    </ScreenLayout>
  );
}
