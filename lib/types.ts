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

export type AddSubAccountFormT = {
  first_name: string;
  last_name: string;
  birth_date: Date;
  email: string;
  phone: string;
};

export type SupportDefaultFormT = {
  first_name: string;
  last_name: string;
  inquiry: string;
};

export type NotificationCardT = {
  image: string | ImageSourcePropType;
  title: string;
  desc: string;
  date: Date;
  price: number;
  responded: boolean;
};

export type WineCardT = {
  id: string;
  description: string;
  image: string | ImageSourcePropType;
  type: string;
  price: number;
  name: string;
  full_name: string;
  market_value: number;
  score: number;
  case_size: string;
  recommended_holding: string;
  stars: number;
  growth: number;
  sale: number;
};

export type InvestmentLevelCardT = {
  image: string | ImageSourcePropType;
  investment_minimum: number;
  user_investment: number;
};

export type InvestmentCardSeparatorT = {
  investment_minimum: number;
  user_investment: number;
};

export type PortfolioBuilderFormT = {
  investment_range: string;
  investment_time: string;
  risk_appetite: string;
};
