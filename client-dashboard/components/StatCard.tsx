"use client";

import { useRouter } from "next/navigation";

type StatCardProps = {
  title: string;
  value: string;
  href: string;
};

export default function StatCard({ title, value, href }: StatCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(href)}
      className="p-6 bg-white rounded-xl shadow cursor-pointer
      hover:shadow-md hover:bg-gray-50 transition"
    >
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
