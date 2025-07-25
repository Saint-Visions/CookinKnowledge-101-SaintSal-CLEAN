"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import GlobalFooter from "@/components/GlobalFooter";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideFooterOn = ["/workspace"];

  const showFooter = !hideFooterOn.includes(pathname);

  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        {showFooter && <GlobalFooter />}
      </body>
    </html>
  );
}
