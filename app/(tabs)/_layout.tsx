import TabsRightHeader from "~/components/layout/screen-header/screen-right-header";
import TabsLeftHeader from "~/components/layout/screen-header/screen-left-header";
import BackButton from "~/components/ui/back-button";
import { Tabs } from "expo-router";
import { tabs } from "~/lib/tabs";
import { usePathname } from "expo-router";

export default function TabScreens() {
  const pathname = usePathname();

  // Check if the current path is not a primary tab.
  // This is used for Left header conditional rendering of Greetings or Back Button
  const primaryTabs = tabs.some(
    (tab) => tab.title !== null && pathname.includes(tab.file_name)
  );

  return (
    <Tabs
      screenOptions={{
        headerTitle: "", // Empty string so screen title won't show up
        headerLeft: () => (primaryTabs ? <TabsLeftHeader /> : <BackButton />), // Left header greetings
        headerRight: () => <TabsRightHeader />, // Right header buttons
        tabBarActiveTintColor: "#b65b42", // Active icon color
        headerStyle: {
          height: 110, // Height of header
        },
        headerRightContainerStyle: {
          paddingTop: 10, // Padding of right header
        },
        headerLeftContainerStyle: {
          paddingLeft: 13, // Padding of left header
        },
      }}
    >
      {/* Map the tabs conditionally. If it has title it will render on tabs. */}
      {tabs.map((item, index) =>
        item.title ? (
          <Tabs.Screen
            key={index}
            name={item.file_name} // file name of screen
            options={{
              title: item.title, // title of tab
              tabBarIcon: ({ color }) =>
                item.icon ? <item.icon color={color} /> : null, // icon of tab
            }}
          />
        ) : (
          // You can route to this link but this doesn't show on tabs
          <Tabs.Screen
            key={index}
            name={item.file_name}
            options={{ href: null }}
          />
        )
      )}
    </Tabs>
  );
}
