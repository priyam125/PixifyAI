import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Pixify AI",
  description: "AI-powered image generator and editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
