import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { View } from "react-native";
import { useWindowDimensions } from "react-native";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";
import { MockBillingHistory } from "~/lib/mock-data";

export default function BillingHistoryTable() {
  const { width } = useWindowDimensions();
  const tableWidth = width - 32; // Accounting for container padding (16 * 2)
  const columnWidth = tableWidth / 3;

  return (
    <View style={{ width: tableWidth }}>
      <Table aria-labelledby="acitivity-table">
        <TableHeader>
          <TableRow>
            <TableHead style={{ width: columnWidth }}>
              <Text>LWIN</Text>
            </TableHead>
            <TableHead style={{ width: columnWidth }}>
              <Text className="text-center">Card End</Text>
            </TableHead>
            <TableHead style={{ width: columnWidth }}>
              <Text className="text-center">Amount</Text>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {MockBillingHistory.map((item, index) => {
            return (
              <TableRow
                key={index}
                className={cn(
                  "active:bg-secondary",
                  index % 2 && "bg-muted/40 "
                )}
              >
                <TableCell style={{ width: columnWidth }}>
                  <Text>{item.lwin}</Text>
                </TableCell>
                <TableCell style={{ width: columnWidth }}>
                  <Text className="text-center">{item.card_end}</Text>
                </TableCell>
                <TableCell style={{ width: columnWidth }}>
                  <Text className="text-center">${item.amount}</Text>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </View>
  );
}
