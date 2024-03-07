import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Google Search Clone",
  description: "Google Search Clone using next js and tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer/>
      </body>
    </html>
  );
}
