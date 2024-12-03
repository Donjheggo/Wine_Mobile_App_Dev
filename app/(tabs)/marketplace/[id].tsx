import ScreenLayout from "~/components/layout/screen-layout";
import WineDetails from "~/components/marketplace/wine/wine-details";
import AddToCartDialog from "~/components/marketplace/wine/add-to-cart-dialog";
import BuyNowDialog from "~/components/marketplace/wine/buy-now-dialog";
import WineCardButtons from "~/components/marketplace/wine/wine-card-buttons";
import { ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { MockWines } from "~/lib/mock-data";
import { useState } from "react";
import type { WineCardT } from "~/lib/types";

export default function Screen() {
  // Get if from url params
  const { id } = useLocalSearchParams();
  console.log("Wine ID: ", id);

  const [buyNowModalVisible, setBuyNowModalVisible] = useState<boolean>(false);
  const [addToCartModalVisible, setAddToCartModalVisible] =
    useState<boolean>(false);

  // Sample Wine
  const item: WineCardT = MockWines[0];

  return (
    <ScreenLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Wine Details */}
        <WineDetails item={item} />
        {/* Buy now and Add to Cart Buttons */}
        <WineCardButtons
          setAddToCartModalVisible={setAddToCartModalVisible}
          setBuyNowModalVisible={setBuyNowModalVisible}
        />
        {/* Dialogs */}
        <BuyNowDialog
          modalVisible={buyNowModalVisible}
          setModalVisible={setBuyNowModalVisible}
          item={item}
        />
        <AddToCartDialog
          modalVisible={addToCartModalVisible}
          setModalVisible={setAddToCartModalVisible}
          item={item}
        />
      </ScrollView>
    </ScreenLayout>
  );
}
