import "../styles/globals.css";
import type { Metadata } from "next";
import ClientLayout from "@/components/Layout/Layout";

export const metadata: Metadata = {
  title: "Imfact",
  description: "Imfact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
