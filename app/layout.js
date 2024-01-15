import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fact Checker",
  description: "What is real, anyway?",
};

export default function RootLayout({ children }) {
  return (
    <html className="" lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        src="https://kit.fontawesome.com/97ca5b5e4b.js"
        crossorigin="anonymous"
      />
    </html>
  );
}
