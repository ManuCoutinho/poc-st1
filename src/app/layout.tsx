import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({ weight: ["400", "600", "800"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ST-One",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${font.className} bg-neutral-100 dark:bg-zinc-800 dark:text-zinc-100 text-zinc-700`}>{children}</body>
    </html>
  )
}
