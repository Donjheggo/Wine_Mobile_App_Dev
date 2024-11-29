import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { View } from "react-native";
import { Label } from "../ui/label";
import { useState } from "react";
import { Button } from "../ui/button";
import { Text } from "../ui/text";
import type { PortfolioBuilderFormT } from "~/lib/types";
import PortfolioBuilderWinesModal from "./portfolio-builder-wines-modal";

export default function PortfolioBuilderForm({
  setModalVisible,
}: {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [
    portfolioBuilderWinesModalVisible,
    setportfolioBuilderWinesModalVisible,
  ] = useState<boolean>(false);
  const [form, setForm] = useState<PortfolioBuilderFormT>({
    investment_range: "",
    investment_time: "",
    risk_appetite: "",
  });

  const handleSubmit = async () => {
    try {
      // Add function here
      console.log(form);

      // Open portfolio builder wines Modal
      setportfolioBuilderWinesModalVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("Portfolio builder modal: ", portfolioBuilderWinesModalVisible);

  return (
    <>
      {/* Portfolio Builder Wines Modal */}
      <PortfolioBuilderWinesModal
        modalVisible={portfolioBuilderWinesModalVisible}
        setModalVisible={setportfolioBuilderWinesModalVisible}
      />
      <View className="mt-4 flex-1 gap-4">
        <View className="gap-2">
          <Label>How much do you want to invest?</Label>
          <Select
            onValueChange={(value) =>
              setForm({
                ...form,
                investment_range: value?.value as string,
              })
            }
          >
            <SelectTrigger>
              <SelectValue
                className="text-foreground text-sm native:text-lg"
                placeholder={investment_ranges[0].label}
              />
            </SelectTrigger>
            <SelectContent portalHost="portfolio-builder-modal-portal">
              <SelectGroup>
                {investment_ranges.map((item, index) => (
                  <SelectItem
                    key={index}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </View>
        <View className="gap-2">
          <Label>How long do you want to invest for (minimum 5 years)?</Label>
          <Select
            onValueChange={(value) =>
              setForm({
                ...form,
                investment_time: value?.value as string,
              })
            }
          >
            <SelectTrigger>
              <SelectValue
                className="text-foreground text-sm native:text-lg"
                placeholder={investment_time_ranges[0].label}
              />
            </SelectTrigger>
            <SelectContent portalHost="portfolio-builder-modal-portal">
              <SelectGroup>
                {investment_time_ranges.map((item, index) => (
                  <SelectItem
                    key={index}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </View>
        <View className="gap-2">
          <Label>What is your risk appetite?</Label>
          <Select
            onValueChange={(value) =>
              setForm({
                ...form,
                risk_appetite: value?.value as string,
              })
            }
          >
            <SelectTrigger>
              <SelectValue
                className="text-foreground text-sm native:text-lg"
                placeholder={risk_appetites[0].label}
              />
            </SelectTrigger>
            <SelectContent portalHost="portfolio-builder-modal-portal">
              <SelectGroup>
                {risk_appetites.map((item, index) => (
                  <SelectItem
                    key={index}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </View>
        <View className="mt-4 flex-row gap-4 items-center justify-between">
          <Button
            onPress={() => setModalVisible(false)}
            className="flex-1"
            variant="outline"
          >
            <Text>Cancel</Text>
          </Button>
          <Button onPress={handleSubmit} className="flex-1 bg-violet-700">
            <Text>Generate</Text>
          </Button>
        </View>
      </View>
    </>
  );
}

const investment_ranges = [
  { label: "1 - 10k", value: "1-10k" },
  { label: "10 - 50k", value: "10-50k" },
  { label: "50k+", value: "50k+" },
];
const investment_time_ranges = [
  { label: "1 - 2 years", value: "1-2years" },
  { label: "2 - 5 years", value: "2-5years" },
  { label: "5 - 10 years", value: "5-10years" },
];
const risk_appetites = [
  { label: "N/A", value: "n/a" },
  { label: "Economic", value: "economic" },
  { label: "Strategic", value: "strategic" },
  { label: "Capacity", value: "capacity" },
];
