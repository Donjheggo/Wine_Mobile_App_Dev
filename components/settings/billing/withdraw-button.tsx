import { Link } from "expo-router";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function WithdrawButton() {
  return (
    <Link href="/(tabs)/settings/billing/withdraw" asChild>
      <Button size="sm" variant="outline" className="border-red-500 w-[120]">
        <Text className="text-red-500">Withdraw</Text>
      </Button>
    </Link>
  );
}
