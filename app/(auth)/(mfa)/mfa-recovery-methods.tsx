import { View, TouchableOpacity } from "react-native";
import { Text } from "~/components/ui/text";
import { RectangleEllipsis } from "~/lib/icons/rectangle-ellipsis";
import { Mail } from "~/lib/icons/mail";
import { Link } from "expo-router";

export default function Screen() {
  return (
    <View>
      <Text className="text-xl text-center font-poppins-light">
        Recovery Methods
      </Text>
      <Text className="text-center mt-4 text-muted-foreground text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </Text>
      <Link href="/" asChild>
        <TouchableOpacity>
          <View className="mt-14 flex-row items-center gap-2">
            <RectangleEllipsis
              size={45}
              strokeWidth={1}
              className="text-muted-foreground"
            />
            <View>
              <Text>Recovery code</Text>
              <Text className="text-sm text-muted-foreground">
                Recover using 6 digit code from authenticator.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
      <Link href="/(auth)/(mfa)/mfa-recovery-email-method" asChild>
        <TouchableOpacity>
          <View className="mt-10 flex-row items-center gap-2">
            <Mail size={45} strokeWidth={1} className="text-muted-foreground" />
            <View>
              <Text>Email</Text>
              <Text className="text-sm text-muted-foreground">
                Recover using your email address.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
