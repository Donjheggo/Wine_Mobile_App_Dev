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
