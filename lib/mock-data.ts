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

export const MockBillingHistory = [
  {
    lwin: "10062052020",
    card_end: "2046",
    amount: 100,
  },
  {
    lwin: "10062052020",
    card_end: "2046",
    amount: 100,
  },
  {
    lwin: "10062052020",
    card_end: "2046",
    amount: 100,
  },
  {
    lwin: "10062052020",
    card_end: "2046",
    amount: 100,
  },
  {
    lwin: "10062052020",
    card_end: "2046",
    amount: 100,
  },
  {
    lwin: "10062052020",
    card_end: "2046",
    amount: 100,
  },
];

export const MockNotifications = [
  {
    id: "10135442015",
    sale: 20,
    price: 3286.52,
    description:
      "Lorem  ipsum odor amet, consectetuer adipiscing elit. Per vestibulum commodo sit donec non tellus vel. Aptent et mauris ac potenti, ridiculus natoque. Venenatis vestibulum maximus duis facilisi nec dictumst. Ac sociosqu suscipit molestie urna adipiscing per. Egestas vehicula class velit vulputate tempor adipiscing? Malesuada velit tempor praesent hendrerit tellus luctus auctor purus.",
    image: require("~/assets/images/wine.png"),
    title: "LWIN: 1504500 negotiated to £450",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: (() => {
      const date = new Date();
      date.setDate(date.getDate() - 1); // 1 day ago
      return date;
    })(),

    responded: true,
  },
  {
    id: "10135442015",
    sale: 20,
    price: 3286.52,
    description:
      "Lorem  ipsum odor amet, consectetuer adipiscing elit. Per vestibulum commodo sit donec non tellus vel. Aptent et mauris ac potenti, ridiculus natoque. Venenatis vestibulum maximus duis facilisi nec dictumst. Ac sociosqu suscipit molestie urna adipiscing per. Egestas vehicula class velit vulputate tempor adipiscing? Malesuada velit tempor praesent hendrerit tellus luctus auctor purus.",
    image: require("~/assets/images/wine.png"),
    title: "New wine LWIN: 10101 on Market",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: (() => {
      const date = new Date();
      date.setDate(date.getDate() - 2); // 2 days ago
      return date;
    })(),
    responded: false,
  },
  {
    id: "10135442015",
    sale: 20,
    price: 3286.52,
    description:
      "Lorem  ipsum odor amet, consectetuer adipiscing elit. Per vestibulum commodo sit donec non tellus vel. Aptent et mauris ac potenti, ridiculus natoque. Venenatis vestibulum maximus duis facilisi nec dictumst. Ac sociosqu suscipit molestie urna adipiscing per. Egestas vehicula class velit vulputate tempor adipiscing? Malesuada velit tempor praesent hendrerit tellus luctus auctor purus.",
    image: require("~/assets/images/wine.png"),
    title: "New wine LWIN: 10101 on Market",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: (() => {
      const date = new Date();
      date.setDate(date.getDate() - 3); // 3 days ago
      return date;
    })(),
    responded: false,
  },
  {
    id: "10135442015",
    sale: 20,
    price: 3286.52,
    description:
      "Lorem  ipsum odor amet, consectetuer adipiscing elit. Per vestibulum commodo sit donec non tellus vel. Aptent et mauris ac potenti, ridiculus natoque. Venenatis vestibulum maximus duis facilisi nec dictumst. Ac sociosqu suscipit molestie urna adipiscing per. Egestas vehicula class velit vulputate tempor adipiscing? Malesuada velit tempor praesent hendrerit tellus luctus auctor purus.",
    image: require("~/assets/images/wine.png"),
    title: "New wine LWIN: 10101 on Market",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: (() => {
      const date = new Date();
      date.setDate(date.getDate() - 8); // 8 days ago
      return date;
    })(),
    responded: false,
  },
  {
    id: "10135442015",
    sale: 20,
    price: 3286.52,
    description:
      "Lorem  ipsum odor amet, consectetuer adipiscing elit. Per vestibulum commodo sit donec non tellus vel. Aptent et mauris ac potenti, ridiculus natoque. Venenatis vestibulum maximus duis facilisi nec dictumst. Ac sociosqu suscipit molestie urna adipiscing per. Egestas vehicula class velit vulputate tempor adipiscing? Malesuada velit tempor praesent hendrerit tellus luctus auctor purus.",
    image: require("~/assets/images/wine.png"),
    title: "New wine LWIN: 10101 on Market",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: (() => {
      const date = new Date();
      date.setDate(date.getDate() - 9); // 9 days ago
      return date;
    })(),
    responded: false,
  },
  {
    id: "10135442015",
    sale: 20,
    price: 3286.52,
    description:
      "Lorem  ipsum odor amet, consectetuer adipiscing elit. Per vestibulum commodo sit donec non tellus vel. Aptent et mauris ac potenti, ridiculus natoque. Venenatis vestibulum maximus duis facilisi nec dictumst. Ac sociosqu suscipit molestie urna adipiscing per. Egestas vehicula class velit vulputate tempor adipiscing? Malesuada velit tempor praesent hendrerit tellus luctus auctor purus.",
    image: require("~/assets/images/wine.png"),
    title: "Requested booking new date ",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: (() => {
      const date = new Date();
      date.setDate(date.getDate() - 10); // 10 days ago
      return date;
    })(),
    responded: true,
  },
];

export const MockWines = [
  {
    id: "10135442015",
    sale: 20,
    price: 3286.52,
    description:
      "Lorem  ipsum odor amet, consectetuer adipiscing elit. Per vestibulum commodo sit donec non tellus vel. Aptent et mauris ac potenti, ridiculus natoque. Venenatis vestibulum maximus duis facilisi nec dictumst. Ac sociosqu suscipit molestie urna adipiscing per. Egestas vehicula class velit vulputate tempor adipiscing? Malesuada velit tempor praesent hendrerit tellus luctus auctor purus.",
    image: require("~/assets/images/wine.png"),
    growth: 10,
    type: "Rare",
    name: "Chateau Mouton Rothschild",
    full_name: "Chateau Lafite Rothschild Premier Cru Classe, Pauillac",
    market_value: 2800.91,
    score: 98,
    case_size: "1x75",
    recommended_holding: "2yrs",
    stars: 5,
  },
  {
    id: "10135442015",
    sale: 20,
    price: 3286.52,
    description:
      "Lorem  ipsum odor amet, consectetuer adipiscing elit. Per vestibulum commodo sit donec non tellus vel. Aptent et mauris ac potenti, ridiculus natoque. Venenatis vestibulum maximus duis facilisi nec dictumst. Ac sociosqu suscipit molestie urna adipiscing per. Egestas vehicula class velit vulputate tempor adipiscing? Malesuada velit tempor praesent hendrerit tellus luctus auctor purus.",
    image: require("~/assets/images/wine.png"),
    growth: 10,
    type: "Rare",
    name: "Chateau Mouton Rothschild",
    full_name: "Chateau Lafite Rothschild Premier Cru Classe, Pauillac",
    market_value: 2800.91,
    score: 98,
    case_size: "1x75",
    recommended_holding: "2yrs",
    stars: 4,
  },
  {
    id: "10135442015",
    sale: 20,
    price: 3286.52,
    description:
      "Lorem  ipsum odor amet, consectetuer adipiscing elit. Per vestibulum commodo sit donec non tellus vel. Aptent et mauris ac potenti, ridiculus natoque. Venenatis vestibulum maximus duis facilisi nec dictumst. Ac sociosqu suscipit molestie urna adipiscing per. Egestas vehicula class velit vulputate tempor adipiscing? Malesuada velit tempor praesent hendrerit tellus luctus auctor purus.",
    image: require("~/assets/images/wine.png"),
    growth: 10,
    type: "Rare",
    name: "Chateau Mouton Rothschild",
    full_name: "Chateau Lafite Rothschild Premier Cru Classe, Pauillac",
    market_value: 2800.91,
    score: 98,
    case_size: "1x75",
    recommended_holding: "2yrs",
    stars: 4,
  },
  {
    id: "10135442015",
    sale: 20,
    price: 3286.52,
    description:
      "Lorem  ipsum odor amet, consectetuer adipiscing elit. Per vestibulum commodo sit donec non tellus vel. Aptent et mauris ac potenti, ridiculus natoque. Venenatis vestibulum maximus duis facilisi nec dictumst. Ac sociosqu suscipit molestie urna adipiscing per. Egestas vehicula class velit vulputate tempor adipiscing? Malesuada velit tempor praesent hendrerit tellus luctus auctor purus.",
    image: require("~/assets/images/wine.png"),
    growth: 10,
    type: "Rare",
    name: "Chateau Mouton Rothschild",
    full_name: "Chateau Lafite Rothschild Premier Cru Classe, Pauillac",
    market_value: 2800.91,
    score: 98,
    case_size: "1x75",
    recommended_holding: "2yrs",
    stars: 4.5,
  },
  {
    id: "10135442015",
    sale: 20,
    price: 3286.52,
    description:
      "Lorem  ipsum odor amet, consectetuer adipiscing elit. Per vestibulum commodo sit donec non tellus vel. Aptent et mauris ac potenti, ridiculus natoque. Venenatis vestibulum maximus duis facilisi nec dictumst. Ac sociosqu suscipit molestie urna adipiscing per. Egestas vehicula class velit vulputate tempor adipiscing? Malesuada velit tempor praesent hendrerit tellus luctus auctor purus.",
    image: require("~/assets/images/wine.png"),
    growth: 10,
    type: "Rare",
    name: "Chateau Mouton Rothschild",
    full_name: "Chateau Lafite Rothschild Premier Cru Classe, Pauillac",
    market_value: 2800.91,
    score: 98,
    case_size: "1x75",
    recommended_holding: "2yrs",
    stars: 5,
  },
  {
    id: "10135442015",
    sale: 20,
    price: 3286.52,
    description:
      "Lorem  ipsum odor amet, consectetuer adipiscing elit. Per vestibulum commodo sit donec non tellus vel. Aptent et mauris ac potenti, ridiculus natoque. Venenatis vestibulum maximus duis facilisi nec dictumst. Ac sociosqu suscipit molestie urna adipiscing per. Egestas vehicula class velit vulputate tempor adipiscing? Malesuada velit tempor praesent hendrerit tellus luctus auctor purus.",
    image: require("~/assets/images/wine.png"),
    growth: 10,
    type: "Rare",
    name: "Chateau Mouton Rothschild",
    full_name: "Chateau Lafite Rothschild Premier Cru Classe, Pauillac",
    market_value: 2800.91,
    score: 98,
    case_size: "1x75",
    recommended_holding: "2yrs",
    stars: 5,
  },
  {
    id: "10135442015",
    sale: 20,
    price: 3286.52,
    description:
      "Lorem  ipsum odor amet, consectetuer adipiscing elit. Per vestibulum commodo sit donec non tellus vel. Aptent et mauris ac potenti, ridiculus natoque. Venenatis vestibulum maximus duis facilisi nec dictumst. Ac sociosqu suscipit molestie urna adipiscing per. Egestas vehicula class velit vulputate tempor adipiscing? Malesuada velit tempor praesent hendrerit tellus luctus auctor purus.",
    image: require("~/assets/images/wine.png"),
    growth: 10,
    type: "Rare",
    name: "Chateau Mouton Rothschild",
    full_name: "Chateau Lafite Rothschild Premier Cru Classe, Pauillac",
    market_value: 2800.91,
    score: 98,
    case_size: "1x75",
    recommended_holding: "2yrs",
    stars: 5,
  },
  {
    id: "10135442015",
    sale: 20,
    price: 3286.52,
    description:
      "Lorem  ipsum odor amet, consectetuer adipiscing elit. Per vestibulum commodo sit donec non tellus vel. Aptent et mauris ac potenti, ridiculus natoque. Venenatis vestibulum maximus duis facilisi nec dictumst. Ac sociosqu suscipit molestie urna adipiscing per. Egestas vehicula class velit vulputate tempor adipiscing? Malesuada velit tempor praesent hendrerit tellus luctus auctor purus.",
    image: require("~/assets/images/wine.png"),
    growth: 10,
    type: "Rare",
    name: "Chateau Mouton Rothschild",
    full_name: "Chateau Lafite Rothschild Premier Cru Classe, Pauillac",
    market_value: 2800.91,
    score: 98,
    case_size: "1x75",
    recommended_holding: "2yrs",
    stars: 4.5,
  },
];
