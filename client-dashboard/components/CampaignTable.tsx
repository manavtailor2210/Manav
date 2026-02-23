import Link from "next/link";
export default function CampaignTable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="font-semibold mb-4">Campaigns</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500">
            <th>Campaign</th>
            <th>Status</th>
            <th>Influencers</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-t">
              <td className="py-3">{row.name}</td>
              <td>
                <span className={`px-3 py-1 rounded text-white ${row.color}`}>
                  {row.status}
                </span>
              </td>
              <td>{row.inf}</td>
             <td>
              <Link
              href="/campaigns"
              className="text-blue-600 cursor-pointer"
              >
              View →
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const rows = [
  { name: "Summer Fashion Promo", status: "Active", inf: "8 Influencers", color: "bg-green-500" },
  { name: "Tech Gadgets Launch", status: "Ongoing", inf: "12 Influencers", color: "bg-yellow-500" },
  { name: "Fitness Challenge", status: "Completed", inf: "10 Influencers", color: "bg-orange-500" },
];
