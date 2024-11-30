'use client'

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
/* eslint-disable @next/next/no-unwanted-polyfillio */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).googleTranslateElementInit = () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en", // Укажите язык оригинального контента
            includedLanguages: "en,es,fr,de,ru,ti", // Языки перевода
            layout:
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (window as any).google.translate.TranslateElement.InlineLayout
                .SIMPLE,
          },
          "google_translate_element"
        );
      };
    };
    addGoogleTranslateScript();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className=" absolute right-0 top-0 ">
        <div id="google_translate_element"></div>
        <div
          id="google_translate_element"
          className="google_trans"
        ></div>
      </nav>
      <main className="flex flex-col container items-center justify-center gap-6">
        <div className="w-1/2">
          <Image
            className=" object-fill"
            src="/Stasis_logo.png"
            height={1000}
            width={1000}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">🚧Page in Development</h1>
          <p className="text-center text-gray-400">
            This page is currently under development. Please check back later
            for updates.
          </p>
        </div>
      </main>
      <footer className="flex h-24 w-full items-center justify-center bottom-0">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="h-4 w-auto sm:h-6"
            height={100}
            width={100}
            priority
          />
        </a>
      </footer>
    </div>
  );
}
