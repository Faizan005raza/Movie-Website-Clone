"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="p-10 mt-10 text-white">
      <h1 className="text-4xl text-center">Login</h1>
      <div className="flex flex-col w-fit gap-5 border-2 rounded-3xl p-5">
        <button className="bg-blue-500 rounded-2xl p-2" onClick={() => signIn("google")}>
          Login with Google
        </button>

        <button className="bg-blue-500 rounded-2xl p-2" onClick={() => signIn("github")}>
          Login with GitHub
        </button>
      </div>
    </div>
  );
}
