// @ts-ignore
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import Providers from "./providers";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords:
    "Anshul Kumar Yadav, healthcare AI, computer vision, medical imaging, mammography, IIT Bombay, KCDH",
  authors: [{ name: "Anshul Kumar Yadav" }],
  creator: "Anshul Kumar Yadav",
  publisher: "Anshul Kumar Yadav",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={`min-h-screen bg-background font-sans antialiased px-4 md:px-14`}
        suppressHydrationWarning
      >
        <Providers
          themeProps={{
            attribute: "class",
            enableSystem: true,
          }}
        >
          <div className="relative z-10 mx-auto max-w-300 py-8">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
