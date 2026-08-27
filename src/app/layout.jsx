import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heapware | Innovative Web Solutions, Tailored for You",
  description:
    "Delivering SMART Solutions: Specific, Measurable, Agile, Realistic, Timely",
  verification: {
    google: "srvBzrw-jN0Em26z_5ymEr2_Nc3qYRuMFrWN0stdf58",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PB9BSFWN');
            `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PB9BSFWN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
