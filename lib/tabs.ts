import { LayoutDashboard } from "~/lib/icons/layout-dashboard";
import { SearchCheck } from "~/lib/icons/search-check";
import { ChartNoAxesCombined } from "~/lib/icons/chart-no-axes-combined";
import { Wine } from "~/lib/icons/wine";
import { ChartPie } from "~/lib/icons/chart-pie";
import type { TabsT } from "./types";

export const tabs: TabsT[] = [
  { file_name: "index", title: "Dashboard", icon: LayoutDashboard },
  { file_name: "portfolio/index", title: "Portfolio", icon: ChartPie },
  { file_name: "marketplace/index", title: "Marketplace", icon: Wine },
  { file_name: "insights", title: "Insights", icon: SearchCheck },
  { file_name: "indicies", title: "Indicies", icon: ChartNoAxesCombined },

  // Routes that are not visible on tabs
  { file_name: "portfolio/[id]", title: null, icon: null },
  { file_name: "marketplace/[id]", title: null, icon: null },
  { file_name: "storage", title: null, icon: null },
  { file_name: "notification", title: null, icon: null },
  { file_name: "cart", title: null, icon: null },
  { file_name: "settings", title: null, icon: null },
];
