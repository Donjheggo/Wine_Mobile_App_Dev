import { LineChart } from "react-native-gifted-charts";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

export default function WineChart() {
  return (
    <View className="my-4">
      <View className="flex-row items-center justify-center gap-4">
        <Text className="text-green-500 text-sm">• Price</Text>
        <Text className="text-orange-500 text-sm">• Market Value</Text>
      </View>
      <LineChart
        isAnimated
        thickness={3}
        color1="green"
        color2="orange"
        maxValue={2000}
        noOfSections={3}
        animateOnDataChange
        animationDuration={1000}
        onDataChangeAnimationDuration={300}
        areaChart
        yAxisTextStyle={{ color: "gray" }}
        data={MockWinePriceData}
        data2={MockWineMarketValueData}
        hideDataPoints
        startFillColor1="green"
        endFillColor1="green"
        startFillColor2="orange"
        endFillColor2="orange"
        startOpacity={0.4}
        endOpacity={0.1}
        spacing={60}
        backgroundColor="#fff"
        rulesColor="#ccc"
        rulesType="solid"
        initialSpacing={0}
        yAxisColor="gray"
        xAxisColor="gray"
      />
    </View>
  );
}

const lcomp = (label: string) => (
  <Text className="text-muted-foreground text-sm">{label}</Text>
);

export const MockWinePriceData = [
  { value: 100, labelComponent: () => lcomp("Jan") },
  { value: 200, labelComponent: () => lcomp("Feb") },
  { value: 230, labelComponent: () => lcomp("Mar") },
  { value: 200, labelComponent: () => lcomp("Apr") },
  { value: 430, labelComponent: () => lcomp("May") },
  { value: 500, labelComponent: () => lcomp("Jun") },
  { value: 480, labelComponent: () => lcomp("Jul") },
  { value: 830, labelComponent: () => lcomp("Aug") },
  { value: 900, labelComponent: () => lcomp("Sep") },
  { value: 1000, labelComponent: () => lcomp("Oct") },
  { value: 1100, labelComponent: () => lcomp("Nov") },
  { value: 1200, labelComponent: () => lcomp("Dec") },
];

export const MockWineMarketValueData = [
  { value: 200 },
  { value: 240 },
  { value: 620 },
  { value: 500 },
  { value: 930 },
  { value: 1200 },
  { value: 1400 },
  { value: 1600 },
  { value: 1800 },
  { value: 2000 },
  { value: 1800 },
  { value: 1600 },
];
