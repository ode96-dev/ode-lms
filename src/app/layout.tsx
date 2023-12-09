import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/providers/toast-provider";
import { ConfettiProvider } from "@/components/providers/confetti-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ODE LMS",
  description: "Inspired by CWA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
