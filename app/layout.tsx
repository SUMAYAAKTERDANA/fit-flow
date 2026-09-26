

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "./component/homepage/shared/Navbar";
import Navbar from "./component/shared/Navbar";
import { Toaster } from "react-hot-toast";
import { PlanProvider } from "./PlanContext";
import Footer from "./component/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FitLog",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a0a] text-white`}>
        <PlanProvider>
          <Navbar />
          <main>{children}</main>
           <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#111",
                color: "#fff",
                border: "1px solid #333",
              },
            }}
          />
        </PlanProvider>
      </body>
    </html>
  );
}