import { View } from "react-native";
import { Text } from "./text";
import { BaseToast, ErrorToast, ToastConfig } from "react-native-toast-message";

interface ToastProps {
  text1?: string;
  text2?: string;
  props?: {
    uuid?: string;
    [key: string]: any;
  };
}

export const toastConfig: ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "green" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
        fontWeight: "400",
      }}
      text2Style={{
        fontSize: 14,
        fontWeight: "200",
        color: "black",
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
        fontWeight: "400",
      }}
      text2Style={{
        fontSize: 14,
        fontWeight: "200",
        color: "black",
      }}
    />
  ),
  tomatoToast: ({ text1, props }: ToastProps) => (
    <View style={{ height: 60, width: "100%", backgroundColor: "tomato" }}>
      <Text>{text1}</Text>
      <Text>{props?.uuid}</Text>
    </View>
  ),
};
