"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",

    brandName: "",
    brandEmail: "",
    website: "",

    phone: "",
    country: "",
    city: "",

    platforms: [] as string[],
  });

  const handleCheckbox = (platform: string) => {
    setForm((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  };

  const handleSignup = () => {
    if (!form.fullName || !form.email || !form.password) {
      alert("Please fill all required fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(form); // later API call
    alert("Account created successfully");

    router.push("/auth/signin");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-3xl p-8 rounded-xl shadow space-y-6">

        <h1 className="text-2xl font-bold text-center">
          Create Your Account
        </h1>

        {/* 1. Basic Account Info */}
        <section>
          <h2 className="font-semibold mb-3">
            Basic Account Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Full Name"
              className="input"
              onChange={(e) =>
                setForm({ ...form, fullName: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="input"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="input"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="input"
              onChange={(e) =>
                setForm({
                  ...form,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
        </section>

        {/* 2. Business / Brand Info */}
        <section>
          <h2 className="font-semibold mb-3">
            Business / Brand Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Brand / Company Name"
              className="input"
              onChange={(e) =>
                setForm({ ...form, brandName: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Business Email"
              className="input"
              onChange={(e) =>
                setForm({ ...form, brandEmail: e.target.value })
              }
            />

            <input
              placeholder="Website (optional)"
              className="input md:col-span-2"
              onChange={(e) =>
                setForm({ ...form, website: e.target.value })
              }
            />
          </div>
        </section>

        {/* 3. Contact Info */}
        <section>
          <h2 className="font-semibold mb-3">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              placeholder="Contact Number"
              className="input"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              placeholder="Country"
              className="input"
              onChange={(e) =>
                setForm({ ...form, country: e.target.value })
              }
            />

            <input
              placeholder="City"
              className="input"
              onChange={(e) =>
                setForm({ ...form, city: e.target.value })
              }
            />
          </div>
        </section>

        {/* 4. Campaign Preferences */}
        <section>
          <h2 className="font-semibold mb-3">
            Campaign Preferences
          </h2>

          <div className="flex flex-wrap gap-4 text-sm">
            {["Instagram", "YouTube"].map(
              (platform) => (
                <label
                  key={platform}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    checked={form.platforms.includes(platform)}
                    onChange={() => handleCheckbox(platform)}
                  />
                  {platform}
                </label>
              )
            )}
          </div>
        </section>

        {/* Submit */}
        <button
          onClick={handleSignup}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          Create Account
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="text-blue-600 font-medium"
          >
            Sign In
          </Link>
        </p>
      </div>

      {/* Input Style */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}
