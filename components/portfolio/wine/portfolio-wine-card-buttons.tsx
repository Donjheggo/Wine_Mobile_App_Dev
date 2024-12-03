import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { EllipsisVertical } from "~/lib/icons/ellipsis-vertical";
import { useState } from "react";
import PortfolioWineMoreOptionsModal from "./portfolio-wine-more-options-modal";
import type { ManageModalsVisibilityT } from "~/lib/types";

export default function PorfolioWineCardButtons({
  setModalsVisibilty,
}: {
  setModalsVisibilty: React.Dispatch<
    React.SetStateAction<ManageModalsVisibilityT>
  >;
}) {
  const [moreOptionsModalVisible, setMoreOptionsModalVisible] =
    useState<boolean>(false);

  return (
    <>
      <View className="mt-4 flex-row items-center gap-2 justify-between ">
        <Button
          onPress={() => setMoreOptionsModalVisible(true)}
          variant="outline"
        >
          <EllipsisVertical className="text-muted-foreground" />
        </Button>
        <Button
          onPress={() =>
            setModalsVisibilty((prev) => ({ ...prev, buymore: true }))
          }
          variant="outline"
          className="flex-1"
        >
          <Text>Buy</Text>
        </Button>
        <Button
          className="flex-1 bg-red-700"
          onPress={() =>
            setModalsVisibilty((prev) => ({ ...prev, sell: true }))
          }
        >
          <Text>Sell</Text>
        </Button>
      </View>
      {/* More Options Modal */}
      <PortfolioWineMoreOptionsModal
        modalVisible={moreOptionsModalVisible}
        setModalVisible={setMoreOptionsModalVisible}
        setGiftModalVisible={setModalsVisibilty}
        setDeliverModalVisible={setModalsVisibilty}
      />
    </>
  );
}
