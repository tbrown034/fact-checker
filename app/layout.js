import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fact Checker",
  description: "What is real, anyway?",
};

export default function RootLayout({ children }) {
  return (
    <head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </head>
  );
}
