import Link from "next/link";
import {
  LayoutDashboard,
  Megaphone,
  PlusCircle,
  Reply,
  User,
  PieChart,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white">
      <div className="p-6 font-bold text-xl text-black">
        Welcome Client
      </div>

      <nav className="space-y-2 px-4">
        <SidebarItem href="/" icon={<LayoutDashboard />} label="Dashboard" />
        <SidebarItem href="/campaigns" icon={<Megaphone />} label="Campaigns" />
        <SidebarItem href="/create-campaign" icon={<PlusCircle />} label="Create Campaign" />
        <SidebarItem href="/influencer-response" icon={<Reply />} label="Influencer Response" />
        <SidebarItem href="/reports" icon={<PieChart />} label="Reports" />
        <SidebarItem href="/profile" icon={<User />} label="Profile" />
      </nav>
    </aside>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SidebarItem({ href, icon, label }: any) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 p-3 rounded hover:bg-blue-50 text-black"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
