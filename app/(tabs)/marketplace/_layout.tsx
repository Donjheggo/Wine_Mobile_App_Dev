import ScreenLayout from "~/components/layout/screen-layout";
import { Slot } from "expo-router";

import MarketplaceHeader from "~/components/marketplace/marketplace-header";

export default function MarketplaceLayout() {
  return (
    <ScreenLayout>
      <MarketplaceHeader />
      <Slot />
    </ScreenLayout>
  );
}
