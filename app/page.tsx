'use client'

import Image from "next/image";
import Link from "next/link";
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
    <div className="flex flex-col items-center justify-center mx-auto">
      <nav className=" absolute right-0 top-0 ">
        <div id="google_translate_element"></div>
        <div id="google_translate_element" className="google_trans"></div>
      </nav>
      <main className="flex flex-col container items-center justify-center gap-6">
        <div className="w-1/3">
          <Image
            className=" object-fill"
            src="/Stasis_logo.png"
            height={1000}
            width={1000}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-center text-2xl md:text-4xl font-bold text-nowrap">
            🚧Страница в разработке
          </h1>
          <p className="text-center text-gray-400">
            Эта страница в настоящее время находится в разработке. Пожалуйста,
            зайдите позже для получения обновлений.
          </p>
        </div>
        <article className=" w-full p-2">
          <h1 className="text-2xl font-bold text-center">Немного о нас</h1>
          <p className="mx-3 mt-2 text-pretty subpixel-antialiased tracking-wide">
            <span>
              Стазис — международный альянс, в основном состоящий из
              русскоязычных игроков. Мы ценим общение и часто общаемся в
              голосовом чате — не только по игре, но и для приятного
              времяпрепровождения.
            </span>
            <br />
            <span>
              Наши игроки имеют опыт более года, что помогает нам уверенно
              справляться с любыми задачами. Мы любим сражаться, но также
              понимаем важность дипломатии. В нашем альянсе открыты к новым
              идеям и множеству точек зрения.
            </span>
            <br />
            <span>
              Мы всегда готовы поддержать интересные предложения, чтобы сделать
              наше сообщество ещё сильнее и интереснее. Присоединяйтесь к нам и
              станьте частью дружной команды!
            </span>
          </p>
        </article>
        <Link
          className="p-4 bg-pretty text-white border rounded-md"
          href="https://forms.gle/3oamsm6nqRrmSNrr5"
        >
          Заполнить Google Form
        </Link>
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
