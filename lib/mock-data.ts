import type { SubAccountsCardPropsT } from "./types";
import type { ActivityDialogPropsT } from "./types";

export const MockSubAccounts: SubAccountsCardPropsT[] = [
  {
    first_name: "Elain",
    last_name: "Hess",
    image: require("~/assets/images/user-placeholder.jpg"),
  },
  {
    first_name: "John",
    last_name: "Doe",
    image: require("~/assets/images/user-placeholder.jpg"),
  },
  {
    first_name: "Justin",
    last_name: "Mullins",
    image: require("~/assets/images/user-placeholder.jpg"),
  },
];

export const MockActivites: ActivityDialogPropsT[] = [
  {
    activity: "Sell the 10062052020 Wine",
    date: new Date(),
    type: "Sell",
    image: require("~/assets/images/wine.png"),
    price: 100,
  },
  {
    activity: "Bought the 10062052020 Wine",
    date: new Date(),
    type: "Buy",
    image: require("~/assets/images/wine.png"),
    price: 200,
  },
  {
    activity: "Gift the 10062052020 Wine to John Doe",
    date: new Date(),
    type: "Gift",
    image: require("~/assets/images/wine.png"),
    price: 130,
  },
  {
    activity:
      "Delivery of 10062052020 Wine to Mr. John Smith, 123 High Street, London, SW1A 1AA, UK.",
    date: new Date(),
    type: "Delivery",
    image: require("~/assets/images/wine.png"),
    price: 120,
  },
  {
    activity: "Sell the 10062052020 Wine",
    date: new Date(),
    type: "Sell",
    image: require("~/assets/images/wine.png"),
    price: 140,
  },
  {
    activity: "Bought the 10062052020 Wine",
    date: new Date(),
    type: "",
    image: require("~/assets/images/wine.png"),
    price: 90,
  },
  {
    activity:
      "Delivery of 10062052020 Wine to Ms. Emily Johnson, 45 Baker Avenue, Manchester, M1 2AB.",
    date: new Date(),
    type: "Delivery",
    image: require("~/assets/images/wine.png"),
    price: 70,
  },
  {
    activity: "Sell the 10062052020 Wine",
    date: new Date(),
    type: "Sell",
    image: require("~/assets/images/wine.png"),
    price: 140,
  },
  {
    activity: "Bought the 10062052020 Wine",
    date: new Date(),
    type: "",
    image: require("~/assets/images/wine.png"),
    price: 90,
  },
  {
    activity:
      "Delivery of 10062052020 Wine to Ms. Emily Johnson, 45 Baker Avenue, Manchester, M1 2AB.",
    date: new Date(),
    type: "Delivery",
    image: require("~/assets/images/wine.png"),
    price: 70,
  },
];
