import {
  BarChartHorizontal,
  BotIcon,
  CatIcon,
  LayoutDashboard,
  MessageCircleMore,
  Plus,
  Settings,
} from "lucide-react";

export const links = [
  {
    name: "Create Class",
    href: "/dash/joincreate",
    icon: Plus,
  },
  {
    name: "Dashboard",
    href: "/dash",
    icon: LayoutDashboard,
  },
  {
    name: "Messages",
    href: "/dash/message",
    icon: MessageCircleMore,
  },
  {
    name: "Notes",
    href: "/dash/notes",
    icon: BarChartHorizontal,
  },
  {
    name: "Classes",
    href: "/dash/class",
    icon: LayoutDashboard,
  },
  {
    name: "Settings",
    href: "#",
    icon: Settings,
  },
  {
    name: "Chat with AI",
    href: "/dash/ai",
    icon: BotIcon,
  },
];
