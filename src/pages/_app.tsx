import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Roboto_Mono } from "next/font/google";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  return (
    <main className={`${inter.variable} ${isDark && "dark"} leading-7 text-lg`}>
      <div className='dark:text-white dark:bg-gray-900 min-h-screen'>
        <div className='flex justify-end'>
          <button
            className='inline-block px-4 py-2 text-base font-medium leading-6 text-center transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-gray-100 focus:outline-none dark:hover:bg-black m-4'
            onClick={() => {
              setIsDark((prev) => !prev);
            }}
          >
            Theme
          </button>
        </div>
        <Component {...pageProps} />
      </div>
    </main>
  );
}
