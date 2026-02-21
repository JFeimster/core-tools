import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Core Tool Directory",
  description: "A neo-brutalist directory to launch tool pages, embeds, and landing pages fast.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Core Tool Directory",
    description: "Browse tools. Generate landing pages. Copy embeds. Ship.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-mono">
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
