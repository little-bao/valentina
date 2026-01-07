import type { Viewport } from "next";

import { ClerkWrapper } from "./ClerkWrapper";
import Header from "./Header";
import { QueryProvider } from "./QueryProvider";
import ThemeProvider from "./ThemeProvider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#000212" },
  ],
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <QueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ClerkWrapper>
          <Header />
          <main>{children}</main>
        </ClerkWrapper>
      </ThemeProvider>
    </QueryProvider>
  );
};

export default layout;
