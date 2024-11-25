import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Label } from "~/components/ui/label";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";
import { useState } from "react";
import BackButton from "~/components/ui/back-button";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";
import type { RegisterStepTwoFormT } from "~/lib/types";

export default function Screen() {
  const [form, setForm] = useState<RegisterStepTwoFormT>({
    budget: "",
    investment_time: "",
    invested_before: false,
    nearest_office: "",
  });

  const selections = {
    budget: ["1 - 5k", "5 - 10k", "10 - 20k", "20 - 50k", "50k+"],
    investment_time: ["5 years", "5 - 10 years", "10 - 20 years", "20+ years"],
    invested_before: [
      { label: "Yes", value: true },
      { label: "No", value: false },
    ],
    nearest_office: ["UK", "US", "EU"],
  };

  const handleSubmit = async () => {
    // add logic here
    router.push("/(overview)/(auth)/(sign-up)/step-3");
  };

  return (
    <View>
      <BackButton />
      <View className="gap-10 mt-5">
        <Progress value={40} />
        <Text className="text-xl text-center font-poppins-light">
          We need to know your investment status at the moment.
        </Text>
        <View className="gap-2">
          <Label>How much is your budget?</Label>
          <Select
            onValueChange={(value) =>
              setForm({
                ...form,
                budget: value?.value as string,
              })
            }
          >
            <SelectTrigger>
              <SelectValue
                className="text-foreground text-sm native:text-lg"
                placeholder={selections.budget[0]}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {selections.budget.map((item, index) => (
                  <SelectItem key={index} label={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </View>
        <View className="gap-2">
          <Label>How long do you want to invest for?</Label>
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
                placeholder={selections.investment_time[0]}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {selections.investment_time.map((item, index) => (
                  <SelectItem key={index} label={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </View>
        <View className="gap-2">
          <Label>Have you ever invested in fine win?</Label>
          <Select
            onValueChange={(value) =>
              setForm({
                ...form,
                invested_before: Boolean(value?.value),
              })
            }
          >
            <SelectTrigger>
              <SelectValue
                className="text-foreground text-sm native:text-lg"
                placeholder={selections.invested_before[0].label}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {selections.invested_before.map((item, index) => (
                  <SelectItem
                    key={index}
                    label={item.label}
                    value={String(item.value)}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </View>
        <View className="gap-2">
          <Label>
            Where is your nearest Vintage Associates regional office?
          </Label>
          <Select
            onValueChange={(value) =>
              setForm({
                ...form,
                nearest_office: value?.value as string,
              })
            }
          >
            <SelectTrigger>
              <SelectValue
                className="text-foreground text-sm native:text-lg"
                placeholder={selections.nearest_office[0]}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {selections.nearest_office.map((item, index) => (
                  <SelectItem key={index} label={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </View>
        <Button onPress={handleSubmit} size="lg">
          <Text>Next</Text>
        </Button>
      </View>
    </View>
  );
}
