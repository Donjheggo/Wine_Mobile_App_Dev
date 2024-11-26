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
import { MockActivites } from "~/lib/mock-data";
import { Banknote } from "~/lib/icons/bank-note";
import { Tag } from "~/lib/icons/tag";
import { Gift } from "~/lib/icons/gift";
import { Truck } from "~/lib/icons/truck";
import { truncateText } from "~/lib/utils";
import ActivityDialog from "./activity-dialog";

export default function ActivitiesTable() {
  const { width } = useWindowDimensions();
  const tableWidth = width - 32; // Accounting for container padding (16 * 2)
  const columnWidth = tableWidth / 2;

  return (
    <View style={{ width: tableWidth }}>
      <Table aria-labelledby="acitivity-table">
        <TableHeader>
          <TableRow>
            <TableHead style={{ width: columnWidth }}>
              <Text>Activities</Text>
            </TableHead>
            <TableHead style={{ width: columnWidth }}>
              <Text className="text-left">Time Stamp</Text>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {MockActivites.map((item, index) => {
            const firstWord = item.activity.split(" ")[0];
            return (
              <ActivityDialog key={index} item={item}>
                <TableRow
                  className={cn(
                    "active:bg-secondary",
                    index % 2 && "bg-muted/40 "
                  )}
                >
                  <TableCell
                    style={{ width: columnWidth }}
                    className="flex-row items-center gap-2"
                  >
                    {(() => {
                      switch (firstWord) {
                        case "Sell":
                          return (
                            <Tag strokeWidth={1.3} className="text-red-400" />
                          );
                        case "Bought":
                          return (
                            <Banknote
                              strokeWidth={1.3}
                              className="text-green-400"
                            />
                          );

                        case "Delivery":
                          return (
                            <Truck strokeWidth={1.3} className="text-primary" />
                          );
                        case "Gift":
                          return (
                            <Gift
                              strokeWidth={1.3}
                              className="text-orange-400"
                            />
                          );
                        default:
                          return null;
                      }
                    })()}
                    <Text>{truncateText(item.activity, 15)}</Text>
                  </TableCell>

                  <TableCell
                    className="items-start"
                    style={{ width: columnWidth }}
                  >
                    <Text>
                      {truncateText(new Date(item.date).toDateString(), 15)} -{" "}
                      {truncateText(new Date(item.date).toTimeString(), 15)}
                    </Text>
                  </TableCell>
                </TableRow>
              </ActivityDialog>
            );
          })}
        </TableBody>
      </Table>
    </View>
  );
}
