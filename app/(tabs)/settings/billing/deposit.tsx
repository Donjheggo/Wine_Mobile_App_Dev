import { View, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import { CircleAlert } from "~/lib/icons/circle-alert";
import DepositForm from "~/components/settings/billing/deposit-form";
import { Link } from "expo-router";

export default function Screen() {
  return (
    <ScrollView>
      <View className="gap-3">
        <Text className="text-xl font-poppins-medium">Deposit</Text>
        <View>
          <Text className="text-lg">Vintage Associates Bank account</Text>
          <Text className="pt-1 text-sm text-muted-foreground">
            Send your funds to this account and make sure to verify the deposit.
          </Text>
        </View>
        <View className="gap-3 mt-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg">Type:</Text>
            <Text className="text-lg">Organization</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-lg">Account Name:</Text>
            <Text className="text-lg">Vintage Associates</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-lg">Account Number:</Text>
            <Text className="text-lg">80597604645</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-lg">Your account ID:</Text>
            <Text className="text-lg">3335645</Text>
          </View>
        </View>
        <View className="flex-row items-center gap-2 mt-4">
          <CircleAlert className="text-orange-400" />
          <View className="flex-1">
            <Text className="text-sm text-orange-400">
              Put your account ID in notes before sending the money in our bank
            </Text>
          </View>
        </View>
        <View className="mt-32">
          <DepositForm />
        </View>
        <Text className="text-sm text-muted-foreground">
          Forgot to put your account ID in notes?{" "}
          <Link href="/" className="underline">
            Contact us
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
}
