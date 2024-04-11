import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";
import RegisterModal from "./_components/Modals/RegisterModal";
import ToasterProvider from "./_providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shuttobnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
