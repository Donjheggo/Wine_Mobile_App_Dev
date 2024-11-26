import { Slot } from "expo-router";
import ScreenLayout from "~/components/layout/screen-layout";

export default function ScreensLayout() {
  return (
    <ScreenLayout>
      <Slot />
    </ScreenLayout>
  );
}
