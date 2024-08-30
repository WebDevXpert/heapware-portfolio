import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heapware | Delivering Smart Solutions",
  description:
    "Delivering SMART Solutions: Specific, Measurable, Agile, Realistic, Timely",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
