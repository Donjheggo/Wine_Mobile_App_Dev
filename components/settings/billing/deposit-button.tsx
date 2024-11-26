import { Link } from "expo-router";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function DepositButton() {
  return (
    <Link href="/(tabs)/settings/billing/deposit" asChild>
      <Button size="sm" className="w-[120]">
        <Text>Deposit </Text>
      </Button>
    </Link>
  );
}
