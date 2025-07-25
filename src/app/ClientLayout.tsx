"use client";

import { usePathname } from "next/navigation";
import GlobalFooter from "@/components/GlobalFooter";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideFooterOn = ["/workspace"];
  const showFooter = !hideFooterOn.includes(pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      {showFooter && <GlobalFooter />}
    </div>
  );
}
