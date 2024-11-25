import SettingLinkCard from "~/components/settings/setting-links-card";
import SubAccountCard from "~/components/settings/sub-account-card";
import AddSubAccountButton from "~/components/settings/add-sub-account-button";
import { Text } from "~/components/ui/text";
import { View } from "react-native";
import { SettingLinks } from "~/lib/settings-links";
import { MockSubAccounts } from "~/lib/mock-data";

export default function Screen() {
  return (
    <View>
      {/* Links */}
      <Text className="text-xl font-poppins-medium">Settings</Text>
      <View className="gap-3 mt-6">
        {SettingLinks.map((item, index) => (
          <SettingLinkCard
            key={index}
            name={item.name}
            Icon={item.Icon}
            href={item.href}
          />
        ))}
        {/* Sub accounts */}
        <View className="flex-row justify-between items-center mt-8">
          <Text className="text-xl font-poppins-medium ">Sub-accounts</Text>
          <AddSubAccountButton />
        </View>
        {MockSubAccounts.map((item, index) => (
          <SubAccountCard
            key={index}
            first_name={item.first_name}
            last_name={item.last_name}
            image={item.image}
          />
        ))}
      </View>
    </View>
  );
}
