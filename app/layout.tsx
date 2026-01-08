import "./globals.css";

import { manrope } from "@/lib/font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
