import { Tabs } from "expo-router";
import { LayoutDashboard } from "~/lib/icons/layout-dashboard";
import { Box } from "~/lib/icons/box";
import { SearchCheck } from "~/lib/icons/search-check";
import { ChartNoAxesCombined } from "~/lib/icons/chart-no-axes-combined";
import { Wine } from "~/lib/icons/wine";
import { ChartPie } from "~/lib/icons/chart-pie";
import TabsLeftHeader from "~/components/tabs/tabs-left-header";
import TabsRightHeader from "~/components/tabs/tabs-right-header";

export default function TabScreens() {
  return (
    <Tabs
      screenOptions={{
        headerTitle: "", // Empty string so screen title won't show up
        headerLeft: () => <TabsLeftHeader />, // Left header greetings
        headerRight: () => <TabsRightHeader />, // Right header buttons
        tabBarActiveTintColor: "#b65b42", // Active icon color
        headerStyle: {
          height: 120, // Height of header
        },
        headerRightContainerStyle: {
          paddingTop: 16, // Padding of right header
        },
      }}
    >
      <Tabs.Screen
        name="dashboard" // file name eg: dashboard.tsx
        options={{
          title: "Dashboard", // Icon title
          tabBarIcon: ({ color }) => <LayoutDashboard color={color} />, // Icon and icon color
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
          tabBarIcon: ({ color }) => <ChartPie color={color} />,
        }}
      />
      <Tabs.Screen
        name="marketplace"
        options={{
          title: "Marketplace",
          tabBarIcon: ({ color }) => <Wine color={color} />,
        }}
      />
      <Tabs.Screen
        name="storage"
        options={{
          title: "Storage",
          tabBarIcon: ({ color }) => <Box color={color} />,
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: "Insights",
          tabBarIcon: ({ color }) => <SearchCheck color={color} />,
        }}
      />
      <Tabs.Screen
        name="indicies"
        options={{
          title: "Indicies",
          tabBarIcon: ({ color }) => <ChartNoAxesCombined color={color} />,
        }}
      />
    </Tabs>
  );
}
