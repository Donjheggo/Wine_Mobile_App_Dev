import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { View, FlatList } from "react-native";
import { useWindowDimensions } from "react-native";
import { MockBillingHistory } from "~/lib/mock-data";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";

export default function BillingHistoryTable() {
  const { width } = useWindowDimensions();
  const tableWidth = width - 32; // Accounting for container padding (16 * 2)
  const columnWidth = tableWidth / 3;

  return (
    <View style={{ width: tableWidth }} className="flex-1">
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
        <FlatList
          showsVerticalScrollIndicator={false}
          data={MockBillingHistory}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item, index }) => (
            <TableRow
              className={cn("active:bg-secondary", index % 2 && "bg-muted/40 ")}
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
          )}
        />
      </Table>
    </View>
  );
}
