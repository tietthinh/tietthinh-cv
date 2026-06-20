import "./globals.css";

import type { Metadata } from "next";
import { Cinzel, Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tran Tiet Thinh — Senior Software Engineer",
  description:
    "The curriculum vitae of Tran Tiet Thinh — Senior Software Engineer specialising in frontend & full-stack web and mobile development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${cinzel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
