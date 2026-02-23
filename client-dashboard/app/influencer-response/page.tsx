"use client";

import { useState } from "react";

type ResponseType = {
  id: number;
  influencer: string;
  platforms: string[];
  campaign: string;
  deliverables: string;
  price: string;
  status: "Pending" | "Negotiation" | "Approved" | "Rejected";
};

const initialResponses: ResponseType[] = [
  {
    id: 1,
    influencer: "Aarav Sharma",
    platforms: ["Instagram"],
    campaign: "Summer Fashion Launch",
    deliverables: "2 Posts, 3 Stories",
    price: "₹25,000",
    status: "Pending",
  },
  {
    id: 2,
    influencer: "Neha Verma",
    platforms: ["YouTube"],
    campaign: "Tech Gadget Review",
    deliverables: "1 Video",
    price: "₹40,000",
    status: "Negotiation",
  },
  {
    id: 3,
    influencer: "Rohit Patel",
    platforms: ["Instagram", "YouTube"],
    campaign: "Fitness Brand Promo",
    deliverables: "1 Reel, 1 Video, 2 Stories",
    price: "₹60,000",
    status: "Approved",
  },
];

export default function InfluencerResponsesPage() {
  const [responses, setResponses] =
    useState<ResponseType[]>(initialResponses);

  const [selected, setSelected] =
    useState<ResponseType | null>(null);

  /* APPROVE */
  const approveInfluencer = (id: number) => {
    setResponses((prev) =>
      prev.map((res) =>
        res.id === id
          ? { ...res, status: "Approved" }
          : res
      )
    );
  };

  /* REJECT */
  const rejectInfluencer = (id: number) => {
    const confirmReject = confirm(
      "Are you sure you want to reject this influencer?"
    );
    if (!confirmReject) return;

    setResponses((prev) =>
      prev.map((res) =>
        res.id === id
          ? { ...res, status: "Rejected" }
          : res
      )
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Influencer Responses
      </h1>

      {/* TABLE */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Influencer</th>
              <th className="p-4">Platforms</th>
              <th className="p-4">Campaign</th>
              <th className="p-4">Deliverables</th>
              <th className="p-4">Price</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {responses.map((res) => (
              <tr key={res.id} className="border-t">
                <td className="p-4 font-medium">
                  {res.influencer}
                </td>

                {/* Platforms */}
                <td className="p-4">
                  <div className="flex gap-2 flex-wrap">
                    {res.platforms.map((p) => (
                      <span
                        key={p}
                        className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="p-4">{res.campaign}</td>
                <td className="p-4">{res.deliverables}</td>
                <td className="p-4 font-medium">
                  {res.price}
                </td>

                {/* STATUS */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      res.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : res.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : res.status === "Negotiation"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {res.status}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="p-4">
                  <div className="flex flex-col gap-2 w-[120px]">
                    <button
                      onClick={() => setSelected(res)}
                      className="px-3 py-1.5 text-sm border rounded-md hover:bg-gray-100"
                    >
                      View
                    </button>

                    <button
                      disabled={res.status === "Approved"}
                      onClick={() => approveInfluencer(res.id)}
                      className={`px-3 py-1.5 text-sm rounded-md ${
                        res.status === "Approved"
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-black text-white hover:bg-gray-800"
                      }`}
                    >
                      Approve
                    </button>

                    <button
                      disabled={res.status === "Rejected"}
                      onClick={() => rejectInfluencer(res.id)}
                      className={`px-3 py-1.5 text-sm rounded-md ${
                        res.status === "Rejected"
                          ? "border-gray-300 text-gray-400 cursor-not-allowed"
                          : "border border-red-300 text-red-600 hover:bg-red-50"
                      }`}
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* VIEW MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-3">
            <h2 className="text-xl font-bold">
              Influencer Details
            </h2>

            <p><b>Name:</b> {selected.influencer}</p>
            <p>
              <b>Platforms:</b>{" "}
              {selected.platforms.join(", ")}
            </p>
            <p><b>Campaign:</b> {selected.campaign}</p>
            <p><b>Deliverables:</b> {selected.deliverables}</p>
            <p><b>Price:</b> {selected.price}</p>
            <p><b>Status:</b> {selected.status}</p>

            <button
              onClick={() => setSelected(null)}
              className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
