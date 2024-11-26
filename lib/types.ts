import type { LucideIcon } from "lucide-react-native";
import type { ImageSourcePropType } from "react-native";
import type { ElementType } from "react";

export type LoginFormT = {
  email: string;
  password: string;
};

export type RegisterStepOneFormT = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
};

export type RegisterStepTwoFormT = {
  budget: string;
  investment_time: string;
  invested_before: boolean;
  nearest_office: string;
};

export type RegisterStepThreeFormT = {
  type_of_id: string;
  id_number: string;
  selfie_image: string;
  id_image: string;
};

export type RegisterStepFourFormT = {
  full_name: string;
  card_number: string;
  expiry_date: string | Date;
  cvc: string;
};

export type CameraInputPropsT = {
  label: string;
  description: string;
  image_uri?: string;
  icon: React.ElementType;
  onActivate: () => void;
};

export type SettingLinksCardPropsT = {
  name: string;
  Icon: LucideIcon;
  href: any;
};

export type SubAccountsCardPropsT = {
  image: string | ImageSourcePropType;
  first_name: string;
  last_name: string;
};

export type ActivityDialogPropsT = {
  image: any;
  activity: string;
  date: Date;
  price: number;
  type: string;
};

export type TabsT = {
  file_name: string;
  title: string | null;
  icon: ElementType | null;
};
