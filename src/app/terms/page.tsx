"use client";
import Link from "next/link";
import { useState } from "react";

export default function TermsOfService() {
  const [lang, setLang] = useState<"en" | "tr" | "de">("en");

  const content = {
    en: {
      title: "Terms of Service",
      backHome: "Back to Home",
      // User will provide content
      content: "Terms of service content will be added here.",
    },
    tr: {
      title: "Kullanım Koşulları",
      backHome: "Ana Sayfaya Dön",
      content: "Kullanım koşulları içeriği buraya eklenecek.",
    },
    de: {
      title: "Nutzungsbedingungen",
      backHome: "Zurück zur Startseite",
      content: "Nutzungsbedingungen Inhalt wird hier hinzugefügt.",
    },
  };

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[#205B97] hover:text-[#4CA0E8] mb-6 inline-block">
          ← {content[lang].backHome}
        </Link>
        <h1 className="text-4xl font-bold text-[#0A2342] mb-8">{content[lang].title}</h1>
        <div className="prose max-w-none">
          <p>{content[lang].content}</p>
        </div>
      </div>
    </div>
  );
}
