export default function CampaignsPage() {
  const campaigns = [
    {
      id: 1,
      name: "Summer Sale",
      client: "Nike",
      influencer: "John Doe",
      status: "Active",
    },
    {
      id: 2,
      name: "Winter Launch",
      client: "Adidas",
      influencer: "Emma Watson",
      status: "Completed",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Campaign Management
      </h2>

      {/* ASSIGN CAMPAIGN FORM */}
      <div className="bg-white p-6 rounded-xl shadow mb-8 max-w-2xl">

        <h3 className="text-lg font-semibold mb-4">
          Assign New Campaign
        </h3>

        <div className="space-y-4">

          <div>
            <label className="text-sm text-gray-600">
              Campaign Name
            </label>
            <input
              placeholder="Enter Campaign Name"
              className="w-full border p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Select Client
            </label>
            <select className="w-full border p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select Client</option>
              <option>Nike</option>
              <option>Adidas</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Select Influencer
            </label>
            <select className="w-full border p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select Influencer</option>
              <option>John Doe</option>
              <option>Emma Watson</option>
            </select>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition">
            Assign Campaign
          </button>

        </div>
      </div>

      {/* CAMPAIGN LIST */}
      <div className="bg-white rounded-xl shadow overflow-hidden">

        <h3 className="text-lg font-semibold p-4 border-b">
          Assigned Campaigns
        </h3>

        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="text-left p-4">Campaign</th>
              <th className="text-left p-4">Client</th>
              <th className="text-left p-4">Influencer</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {campaigns.map((camp) => (
              <tr
                key={camp.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium">
                  {camp.name}
                </td>

                <td className="p-4 text-gray-500">
                  {camp.client}
                </td>

                <td className="p-4 text-gray-500">
                  {camp.influencer}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      camp.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {camp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
