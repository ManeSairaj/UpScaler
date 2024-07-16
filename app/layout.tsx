import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const IBMSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-sans",
});

export const metadata: Metadata = {
  title: "UpScaler",
  description: "A media asset upscaler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={cn("font-IBMSans antialiased", IBMSans.variable)}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}

