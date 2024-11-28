import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { View, FlatList, useWindowDimensions } from "react-native";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";
import { MockActivites } from "~/lib/mock-data";
import { Banknote } from "~/lib/icons/bank-note";
import { Tag } from "~/lib/icons/tag";
import { Gift } from "~/lib/icons/gift";
import { Truck } from "~/lib/icons/truck";
import { truncateText } from "~/lib/utils";
import ActivityModal from "./activity-modal";
import { useState } from "react";
import type { ActivityDialogPropsT } from "~/lib/types";

export default function ActivitiesTable() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<ActivityDialogPropsT | null>();
  const { width } = useWindowDimensions();
  const tableWidth = width - 32; // Accounting for container padding (16 * 2)
  const columnWidth = tableWidth / 2;

  const handleOpenModal = (item: ActivityDialogPropsT) => {
    setModalItem(item);
    setModalVisible(true);
  };

  return (
    <View style={{ width: tableWidth }} className="flex-1">
      {/* Modal */}
      {modalItem && (
        <ActivityModal
          item={modalItem}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      )}
      {/* Table */}
      <Table aria-labelledby="acitivity-table" className="flex-1">
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

        <FlatList
          data={MockActivites}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item, index }) => {
            const firstWord = item.activity.split(" ")[0];
            return (
              <TableRow
                key={index}
                className={cn(
                  "active:bg-secondary flex-1",
                  index % 2 && "bg-muted/40 "
                )}
                onPress={() => handleOpenModal(item)}
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
                          <Gift strokeWidth={1.3} className="text-orange-400" />
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
            );
          }}
        />
      </Table>
    </View>
  );
}
