"use client";

import { Bell, HelpCircle } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";

export default function Topbar() {
  return (
    <header className="bg-white p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-semibold">
        
      </h1>

      <div className="flex items-center gap-4">
        <HelpCircle className="cursor-pointer" />
        <Bell className="cursor-pointer" />

        <ProfileDropdown />
      </div>
    </header>
  );
}
