'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

const text1 = "🚧Page in Development";

export default function Home() {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en", // Укажите язык оригинального контента
            includedLanguages: "en,es,fr,de,ru", // Языки перевода
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  const [language, setLanguage] = useState("en");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav>
        <div id="w-full google_translate_element"></div>

        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
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
          <h1 className="text-4xl font-bold">{text1}</h1>
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
