"use client";
import { useState } from "react";

export default function InfluencersPage() {

  const [influencers, setInfluencers] = useState([
    {
      id: 1,
      name: "John Doe",
      platform: "Instagram",
      followers: "120K",
      status: "Pending",
    },
    {
      id: 2,
      name: "Emma Watson",
      platform: "YouTube",
      followers: "300K",
      status: "Approved",
    },
  ]);

  const handleApprove = (id: number) => {
    setInfluencers((prev) =>
      prev.map((inf) =>
        inf.id === id ? { ...inf, status: "Approved" } : inf
      )
    );
  };

  const handleReject = (id: number) => {
    setInfluencers((prev) =>
      prev.map((inf) =>
        inf.id === id ? { ...inf, status: "Rejected" } : inf
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Influencers</h2>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="text-left p-4">Influencer</th>
              <th className="text-left p-4">Platform</th>
              <th className="text-left p-4">Followers</th>
              <th className="text-left p-4">Status</th>
              <th className="text-center p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {influencers.map((inf) => (
              <tr key={inf.id} className="border-b hover:bg-gray-50 transition">

                <td className="p-4 font-medium">{inf.name}</td>

                <td className="p-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {inf.platform}
                  </span>
                </td>

                <td className="p-4 text-gray-500">
                  {inf.followers}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      inf.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : inf.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {inf.status}
                  </span>
                </td>

                <td className="p-4 text-center space-x-2">

                  {/* Pending */}
                  {inf.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleApprove(inf.id)}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => handleReject(inf.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                      >
                        Reject
                      </button>
                    </>
                  )}

                  {/* Approved */}
                  {inf.status === "Approved" && (
                    <button
                      onClick={() => handleReject(inf.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Reject
                    </button>
                  )}

                  {/* Rejected */}
                  {inf.status === "Rejected" && (
                    <button
                      onClick={() => handleApprove(inf.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Approve
                    </button>
                  )}

                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
