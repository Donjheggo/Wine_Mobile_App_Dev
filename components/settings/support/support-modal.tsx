import { Text } from "~/components/ui/text";
import { View, TouchableOpacity, Modal } from "react-native";
import { ChevronRight } from "~/lib/icons/chevron-right";
import { CircleHelp } from "~/lib/icons/circle-help";
import { useState } from "react";
import SupportDefaultForm from "./support-default-form";
import SupportModalHeader from "./support-modal-header";
import SupportVipForm from "./support-vip-form";

export default function SupportModal() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const higherInvestment = 20000; // Sample of higher investment
  const userInvestment = 50000; // sample of user investment.

  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <View
        className="flex-row items-center justify-between py-2"
        style={{ borderBottomWidth: 1, borderColor: "#ccc" }}
      >
        <View className="flex-row gap-4 items-center">
          <CircleHelp size={25} className="text-primary" strokeWidth={1.5} />
          <Text className="text-lg">Support</Text>
        </View>
        <ChevronRight size={25} className="text-primary" strokeWidth={1.5} />
      </View>
      {/* Modal */}
      <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle="formSheet"
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Form Container */}
        <View className="p-4">
          {/* Form Header */}
          <SupportModalHeader modalVisible={() => setModalVisible(false)} />

          {userInvestment > higherInvestment ? (
            // Default form
            <SupportVipForm modalVisible={() => setModalVisible(false)} />
          ) : (
            // Vip Form
            <SupportDefaultForm modalVisible={() => setModalVisible(false)} />
          )}
        </View>
      </Modal>
    </TouchableOpacity>
  );
}
