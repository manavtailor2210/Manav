"use client";
import { useState } from "react";

export default function ClientsPage() {

  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Nike India",
      email: "nike@gmail.com",
      status: "Pending",
    },
    {
      id: 2,
      name: "Adidas",
      email: "adidas@gmail.com",
      status: "Approved",
    },
  ]);

  const handleApprove = (id: number) => {
    setClients((prev) =>
      prev.map((client) =>
        client.id === id
          ? { ...client, status: "Approved" }
          : client
      )
    );
  };

  const handleReject = (id: number) => {
    setClients((prev) =>
      prev.map((client) =>
        client.id === id
          ? { ...client, status: "Rejected" }
          : client
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Clients</h2>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="text-left p-4">Client</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Status</th>
              <th className="text-center p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-b hover:bg-gray-50 transition">

                <td className="p-4 font-medium">{client.name}</td>

                <td className="p-4 text-gray-500">{client.email}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      client.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : client.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {client.status}
                  </span>
                </td>

                <td className="p-4 text-center space-x-2">

                  {/* Pending */}
                  {client.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleApprove(client.id)}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => handleReject(client.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                      >
                        Reject
                      </button>
                    </>
                  )}

                  {/* Approved */}
                  {client.status === "Approved" && (
                    <button
                      onClick={() => handleReject(client.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Reject
                    </button>
                  )}

                  {/* Rejected */}
                  {client.status === "Rejected" && (
                    <button
                      onClick={() => handleApprove(client.id)}
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
