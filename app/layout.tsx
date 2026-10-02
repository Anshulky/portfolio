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
    icon: [
      {
        url: "/icon-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
        className="min-h-dvh overflow-x-hidden bg-background font-sans antialiased ps-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] sm:ps-[max(1.5rem,env(safe-area-inset-left))] sm:pe-[max(1.5rem,env(safe-area-inset-right))] lg:ps-[max(2rem,env(safe-area-inset-left))] lg:pe-[max(2rem,env(safe-area-inset-right))] xl:ps-[max(3.5rem,env(safe-area-inset-left))] xl:pe-[max(3.5rem,env(safe-area-inset-right))]"
        suppressHydrationWarning
      >
        <Providers
          themeProps={{
            attribute: "class",
            enableSystem: true,
          }}
        >
          <div className="relative z-10 mx-auto w-full min-w-0 max-w-300 py-6 lg:py-8">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
