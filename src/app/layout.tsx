import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers/Providers";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Live code challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar /> {children}
        </Providers>
      </body>
    </html>
  );
}
