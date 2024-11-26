import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { CircleAlert } from "~/lib/icons/circle-alert";
import { Link } from "expo-router";
import WithdrawForm from "~/components/settings/billing/withdraw-form";
import MastercardCard from "~/components/settings/billing/mastercard-card";

export default function Screen() {
  return (
    <View className="gap-3">
      <Text className="text-xl font-poppins-medium">Withdraw</Text>
      <View>
        <Text className="text-lg">Withdraw your funds</Text>
        <Text className="pt-1 text-sm text-muted-foreground">
          Choose between the set up debit or new bank account.
        </Text>
      </View>
      <View className="mt-10">
        <MastercardCard />
      </View>
      <View className="flex-row items-center gap-2 mt-4">
        <CircleAlert className="text-orange-400" />
        <View className="flex-1">
          <Text className="text-sm text-orange-400">
            We processed withdrawal within 2-5 working days.
          </Text>
        </View>
      </View>
      <View className="mt-32">
        <WithdrawForm />
      </View>
      <Text className="text-sm text-muted-foreground">
        Forgot to put your account ID in notes?{" "}
        <Link href="/" className="underline">
          Contact us
        </Link>
      </Text>
    </View>
  );
}
