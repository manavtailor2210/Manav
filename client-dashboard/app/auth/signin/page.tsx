"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/components/UserContext";

export default function SigninPage() {
  const router = useRouter();
  const { updateUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    // 👉 Later: API verification
    updateUser({
      name: "",
      email: "",
      avatar: "",
    });

    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">
          Sign In
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignin}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          Sign In
        </button>

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-blue-600 font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
