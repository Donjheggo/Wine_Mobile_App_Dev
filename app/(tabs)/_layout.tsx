import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="dashboard" />
      <Tabs.Screen name="indicies" />
      <Tabs.Screen name="insights" />
      <Tabs.Screen name="marketplace" />
      <Tabs.Screen name="portfolio" />
      <Tabs.Screen name="storage" />
    </Tabs>
  );
}
