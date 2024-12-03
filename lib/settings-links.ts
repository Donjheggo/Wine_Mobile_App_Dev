import { Settings } from "~/lib/icons/settings";
import { Box } from "~/lib/icons/box";
import { KeyRound } from "~/lib/icons/key-round";
import { Kanban } from "~/lib/icons/kanban";
import { Receipt } from "~/lib/icons/receipt";
import { NotebookText } from "~/lib/icons/notebook-text";
// import { CircleHelp } from "~/lib/icons/circle-help";
import type { SettingLinksCardPropsT } from "./types";

export const SettingLinks: SettingLinksCardPropsT[] = [
  { href: "/(tabs)/settings/general", name: "General", Icon: Settings },
  { href: "/(tabs)/storage", name: "Storage", Icon: Box },
  { href: "/(tabs)/settings/password", name: "Password", Icon: KeyRound },
  { href: "/(tabs)/settings/activities", name: "Activities", Icon: Kanban },
  { href: "/(tabs)/settings/billing", name: "Billing", Icon: Receipt },
  // { href: "/(tabs)/settings/support", name: "Support", Icon: CircleHelp },
  {
    href: "/(tabs)/settings/knowledge-base",
    name: "Knowledge Base",
    Icon: NotebookText,
  },
];
