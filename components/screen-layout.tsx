import { SafeAreaView, ScrollView } from "react-native";

export default function ScreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 container max-w-screen-xl mx-auto py-4 px-4"
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
