import '@/styles/base.css';
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
