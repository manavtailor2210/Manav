"use client";

import { Bell, HelpCircle } from "lucide-react";
import { useUser } from "@/components/UserContext";

export default function Topbar() {
  const { user } = useUser();

  return (  
    <header className="bg-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold"></h1>

      <div className="flex items-center gap-4">
        <HelpCircle />
        <Bell />
        <span className="font-semibold">{user.name}</span>

        <img
          src={user.avatar}
          className="w-10 h-10 rounded-full object-cover"
          alt="profile"
        />
      </div>
    </header>
  );
}
