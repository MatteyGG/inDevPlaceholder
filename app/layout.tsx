import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "STASIS",
  description: "STASIS Заглушка",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Скрипт GTranslate */}
        <script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                        function googleTranslateElementInit() {
                            new google.translate.TranslateElement(
                                {
                                    pageLanguage: 'en', // Укажите язык оригинального контента
                                    includedLanguages: 'en,es,fr,de,ru', // Укажите языки для перевода
                                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                                },
                                'google_translate_element'
                            );
                        }
                        `,
          }}
        ></script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
