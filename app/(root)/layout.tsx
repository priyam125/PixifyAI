import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
// import "../global.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <SignedOut>
          <h1>Not signed in</h1>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <h1>Signed in</h1>
          <UserButton />
        </SignedIn>
      </div>
      {children}
    </main>
  );
};

export default Layout;
