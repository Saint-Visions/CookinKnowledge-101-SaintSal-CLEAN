import "./globals.css";
import { Metadata } from "next";
import ClientAuditWrapper from "./ClientAuditWrapper";

export const metadata: Metadata = {
  title: "SaintVisionAI - Cookin' Knowledge",
  description: "Enterprise AI automation platform that transforms businesses through intelligent automation, seamless integration, and enterprise-grade security.",
  icons: {
    icon: [
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/manifest.json'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ClientAuditWrapper />
      </body>
    </html>
  );
}
