import ScreenLayout from "~/components/layout/screen-layout";
import PortfolioWineDetails from "~/components/portfolio/wine/porfolio-wine-details";
import PorfolioWineCardButtons from "~/components/portfolio/wine/portfolio-wine-card-buttons";
import SellWineModal from "~/components/portfolio/sell-wine-modal";
import GiftWineModal from "~/components/portfolio/gift-wine-modal";
import BuymoreModal from "~/components/portfolio/buymore-wine-modal";
import DeliverWineModal from "~/components/portfolio/deliver-wine-modal";
import { ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { MockUserWines } from "~/lib/mock-data";
import { useState } from "react";
import type { WineCardT } from "~/lib/types";
import type { ManageModalsVisibilityT } from "~/lib/types";

export default function Screen() {
  // Get id from the url params
  const { id } = useLocalSearchParams();
  console.log("Wine ID: ", id);

  // Sample Wine
  const item: WineCardT = MockUserWines[0];
  // Modals Visibility
  const [modalsVisibility, setModalsVisibilty] =
    useState<ManageModalsVisibilityT>({
      sell: false,
      buymore: false,
      gift: false,
      deliver: false,
    });

  return (
    <ScreenLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Wine Details */}
        <PortfolioWineDetails item={item} />
        {/* Buttons */}
        <PorfolioWineCardButtons setModalsVisibilty={setModalsVisibilty} />

        {/* -- Modals -- */}
        {/* Sell Wine Modal */}
        <SellWineModal
          item={item}
          modalVisible={modalsVisibility.sell}
          setModalsVisibilty={setModalsVisibilty}
        />
        {/* Gift Wine Modal */}
        <GiftWineModal
          item={item}
          modalVisible={modalsVisibility.gift}
          setModalsVisibilty={setModalsVisibilty}
        />
        {/* Buy Wine Modal */}
        <BuymoreModal
          item={item}
          modalVisible={modalsVisibility.buymore}
          setModalsVisibilty={setModalsVisibilty}
        />
        {/* Deliver Wine Modal */}
        <DeliverWineModal
          item={item}
          modalVisible={modalsVisibility.deliver}
          setModalsVisibilty={setModalsVisibilty}
        />
      </ScrollView>
    </ScreenLayout>
  );
}
