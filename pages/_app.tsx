import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Manrope } from "next/font/google";
import localFont from "next/font/local"; // ✅ You missed this import


// Define fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const headingFont = localFont({
  src: "../src/fonts/Poppins-SemiBold.ttf", // ✅ Correct path from /src/app or /src/pages
  display: "swap",
  variable: '--font-heading', // 👈 This is your CSS variable
});

const textFont = localFont({
  src: "../src/fonts/OpenSans.ttf", // ✅ Correct path from /src/app or /src/pages
  display: "swap",
  variable: '--font-text', // 👈 This is your CSS variable
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${manrope.variable} ${headingFont.variable} ${textFont.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
