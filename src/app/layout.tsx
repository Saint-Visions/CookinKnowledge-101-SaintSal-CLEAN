import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaintVisionAI - Cookin' Knowledge",
  description: "Intelligence that scales with you",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
