import ScreenLayout from "~/components/layout/screen-layout";
import { Slot } from "expo-router";

export default function SettingsLayout() {
  return (
    <ScreenLayout>
      <Slot />
    </ScreenLayout>
  );
}
