import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { Orbitron } from "next/font/google";
import { Exo_2 } from "next/font/google";

const orbitron = Orbitron({
  variable: "--font-padrao",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const exo2 = Exo_2({
  variable: "--font-padrao",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: any) {
  return (
    <main className={`${orbitron.variable} ${exo2.variable}`}>
      <Component {...pageProps} />
      <ToastContainer />
    </main>
  );
}