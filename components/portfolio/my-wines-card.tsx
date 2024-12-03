import ManageWineModal from "./manage-wine-modal";
import { View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Text } from "~/components/ui/text";
import { Ellipsis } from "~/lib/icons/ellipsis";
import { Link } from "expo-router";
import { useState } from "react";
import type { WineCardT } from "~/lib/types";

export default function MyWinesCard({ item }: { item: WineCardT }) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <Link
        href={{ pathname: "/portfolio/[id]", params: { id: item.id } }}
        asChild
      >
        <TouchableOpacity className="flex-1 w-[50%]">
          <View className="relative border border-muted-foreground flex-1 rounded-xl p-2">
            <View className="absolute top-0 left-0 bg-[#C4AD93]  px-4 py-1 rounded-tl-xl">
              <Text className="text-white text-sm">{item.type}</Text>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View className="absolute -top-2 -right-1 p-1 rounded-tr-xl">
                <Ellipsis size={20} className="text-muted-foreground" />
              </View>
            </TouchableOpacity>
            <View className="items-center">
              <Image
                source={item.image}
                contentFit="contain"
                style={{ width: 100, height: 100 }}
              />
            </View>
            <View className="pt-2">
              <Text>{item.name}</Text>
              <View className="flex-row justify-between items-center pt-2">
                <Text className="text-sm text-muted-foreground">
                  Market Value:
                </Text>
                <Text className="text-sm text-green-500">
                  £{item.market_value}
                </Text>
              </View>
              <View className="flex-row justify-between items-center">
                <Text className="text-sm text-muted-foreground">Score:</Text>
                <Text className="text-sm text-muted-foreground">
                  {item.score}
                </Text>
              </View>
              <View className="flex-row justify-between items-center">
                <Text className="text-sm text-muted-foreground">
                  Case Size:
                </Text>
                <Text className="text-sm text-muted-foreground">
                  {item.case_size}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
      {/* Manage Wine Modal */}
      <ManageWineModal
        item={item}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
}
