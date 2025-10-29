"use client";
import Link from "next/link";
import { useState } from "react";

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<"en" | "tr" | "de">("en");

  const content = {
    en: {
      title: "Privacy Policy",
      backHome: "Back to Home",
      // User will provide content
      content: "Privacy policy content will be added here.",
    },
    tr: {
      title: "Gizlilik Politikası",
      backHome: "Ana Sayfaya Dön",
      content: "Gizlilik politikası içeriği buraya eklenecek.",
    },
    de: {
      title: "Datenschutzrichtlinie",
      backHome: "Zurück zur Startseite",
      content: "Datenschutzrichtlinie Inhalt wird hier hinzugefügt.",
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
