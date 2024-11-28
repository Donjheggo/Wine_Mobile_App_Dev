import ScreenLayout from "~/components/layout/screen-layout";
import MarketplaceHeader from "~/components/marketplace/marketplace-header";
import { Slot } from "expo-router";

export default function MarketplaceLayout() {
  return (
    <ScreenLayout>
      <MarketplaceHeader />
      <Slot />
    </ScreenLayout>
  );
}
