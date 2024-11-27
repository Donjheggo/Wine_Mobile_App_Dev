import { Slot } from "expo-router";
import ScreenLayout from "~/components/layout/screen-layout";
import SuccessScreenHeader from "~/components/(success-screens)/success-screen-header";
import SuccessScreenFooter from "~/components/(success-screens)/success-screen-footer";

export default function SuccessScreenLayout() {
  return (
    <ScreenLayout>
      <SuccessScreenHeader />
        <Slot />
      <SuccessScreenFooter />
    </ScreenLayout>
  );
}
