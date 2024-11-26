import { Slot } from "expo-router";
import ScreenLayout from "~/components/layout/screen-layout";

export default function SuccessScreenLayout() {
  return (
    <ScreenLayout>
      <Slot />
    </ScreenLayout>
  );
}
