import { View } from "react-native";
import { Text } from "~/components/ui/text";
import DepositButton from "~/components/settings/billing/deposit-button";
import WithdrawButton from "~/components/settings/billing/withdraw-button";
import EditMastercardCard from "~/components/settings/billing/edit-mastercard-card";
import SearchInput from "~/components/ui/search-input";
import SortButton from "~/components/ui/sort-button";
import BillingHistoryTable from "~/components/settings/billing/billing-history-table";

export default function Screen() {
  return (
    <View className="gap-2">
      <Text className="text-xl font-poppins-medium">Billing</Text>
      <View className="flex-row ml-auto gap-2">
        <WithdrawButton />
        <DepositButton />
      </View>
      <Text className="text-lg mt-4">Payment Method (Required)</Text>
      <EditMastercardCard />
      <Text className="text-lg mt-4">History</Text>
      <View className="flex-row items-center gap-4">
        <SearchInput />
        <SortButton />
      </View>
      <BillingHistoryTable />
    </View>
  );
}
