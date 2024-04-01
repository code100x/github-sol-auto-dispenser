"use client";

import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <button
      className="bg-slate-600 px-4 py-2 text-white"
      onClick={() => signIn("github", { callbackUrl: "/profile" })}
      type="button"
    >
      Sign In With GitHub
    </button>
  );
};

export default SignInButton;