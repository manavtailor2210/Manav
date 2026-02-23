import StatCard from "@/components/StatCard";
import EngagementChart from "@/components/EngagementChart";
import CampaignTable from "@/components/CampaignTable";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <StatCard
  title="Total Campaigns"
  value="30"
  href="/campaigns"
/>

<StatCard
  title="Active Campaigns"
  value="12"
  href="/campaigns?status=active"
/>

<StatCard
  title="Completed Campaigns"
  value="18"
  href="/campaigns?status=completed"
/>

      </div>

      <div className="grid grid-cols-2 gap-6">
        <EngagementChart />
      </div>

      <CampaignTable />
    </div>
  );
}
