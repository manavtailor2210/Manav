// export default function Profile() {
//   return <h1 className="text-2xl font-bold">User Profile</h1>;
// }


"use client";

import { useState } from "react";
import { useUser } from "@/components/UserContext";

export default function ProfilePage() {
  const { user, updateUser } = useUser();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    updateUser({ avatar: imageUrl });
  };

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill all password fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    // Later: call backend API here
    alert("Password updated successfully");

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-2xl font-bold">Profile Settings</h1>

      {/* Profile Image */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="font-semibold">Profile Photo</h2>

        <div className="flex items-center gap-6">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
      </div>

      {/* Basic Information */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="font-semibold">Basic Information</h2>

        <div className="space-y-3">
          <div>
            <label className="text-sm text-gray-500">Name</label>
            <input
              type="text"
              value={user.name}
              onChange={(e) =>
                updateUser({ name: e.target.value })
              }
              className="w-full border p-2 rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                updateUser({ email: e.target.value })
              }
              className="w-full border p-2 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="font-semibold">Change Password</h2>

        <div className="space-y-3">
          <input
            type="password"
            placeholder="Current password"
            value={currentPassword}
            onChange={(e) =>
              setCurrentPassword(e.target.value)
            }
            className="w-full border p-2 rounded-lg"
          />

          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(e.target.value)
            }
            className="w-full border p-2 rounded-lg"
          />

          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            className="w-full border p-2 rounded-lg"
          />
        </div>

        <button
          onClick={handlePasswordChange}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Update Password
        </button>
      </div>
    </div>
  );
}
  