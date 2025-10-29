"use client";
import Link from "next/link";
import { useState } from "react";

export default function CookiePolicy() {
  const [lang, setLang] = useState<"en" | "tr" | "de">("en");

  const content = {
    en: {
      title: "Cookie Policy",
      backHome: "Back to Home",
      sections: [
        {
          heading: "Security-related uses",
          text: "seagull-ltd.com may use cookies that enable the use of functions on this site or detect irregular behavior for the purpose of managing and ensuring the security of its systems."
        },
        {
          heading: "Functionality-related uses",
          text: "seagull-ltd.com may use cookies that remember user information and past selections in order to facilitate the use of its systems and provide user-specific usage features."
        },
        {
          heading: "Performance-related uses",
          text: "seagull-ltd.com may use cookies that evaluate and analyze interaction with messages sent and user behaviors in order to increase and measure the performance of its systems."
        },
        {
          heading: "Advertising-related uses",
          text: "seagull-ltd.com may use cookies that measure the effectiveness of these ads or analyze click-through rates for the purpose of delivering ads and similar content within the scope of users' areas of interest through its own or third-party systems."
        }
      ]
    },
    tr: {
      title: "Çerez Politikası",
      backHome: "Ana Sayfaya Dön",
      sections: [
        {
          heading: "Güvenlik amaçlı kullanımlar",
          text: "seagull-ltd.com, sistemlerinin idaresi ve güvenliğinin sağlanması amacıyla, bu sitedeki fonksiyonlardan yararlanmayı sağlayan veyahut düzensiz davranışları tespit eden çerezler kullanabilmektedir."
        },
        {
          heading: "İşlevselliğe yönelik kullanımlar",
          text: "seagull-ltd.com, sistemlerinin kullanımını kolaylaştırmak ve kullanıcı özelinde kullanım özellikleri sağlamak amacıyla, kullanıcıların bilgilerini ve geçmiş seçimlerini hatırlatan çerezler kullanabilmektedir."
        },
        {
          heading: "Performansa yönelik kullanımlar",
          text: "seagull-ltd.com, sistemlerinin performansının artırılması ve ölçülmesi amacıyla, gönderilen iletilerle olan etkileşimi ve kullanıcı davranışlarını değerlendiren ve analiz eden çerezler kullanabilmektedir."
        },
        {
          heading: "Reklam amaçlı kullanımlar",
          text: "seagull-ltd.com, kendine veya üçüncü taraflara ait sistemlerin üzerinden kullanıcıların ilgi alanları kapsamında reklam ve benzeri içeriklerin iletilmesi amacıyla, bu reklamların etkinliğini ölçen veya tıklanma durumunu analiz eden çerezler kullanabilmektedir."
        }
      ]
    },
    de: {
      title: "Cookie-Richtlinie",
      backHome: "Zurück zur Startseite",
      sections: [
        {
          heading: "Sicherheitsbezogene Verwendungen",
          text: "seagull-ltd.com kann Cookies verwenden, die die Nutzung von Funktionen auf dieser Website ermöglichen oder unregelmäßiges Verhalten erkennen, um die Verwaltung und Sicherheit seiner Systeme zu gewährleisten."
        },
        {
          heading: "Funktionalitätsbezogene Verwendungen",
          text: "seagull-ltd.com kann Cookies verwenden, die sich Benutzerinformationen und frühere Auswahlen merken, um die Nutzung seiner Systeme zu erleichtern und benutzerspezifische Nutzungsfunktionen bereitzustellen."
        },
        {
          heading: "Leistungsbezogene Verwendungen",
          text: "seagull-ltd.com kann Cookies verwenden, die die Interaktion mit gesendeten Nachrichten und das Nutzerverhalten bewerten und analysieren, um die Leistung seiner Systeme zu steigern und zu messen."
        },
        {
          heading: "Werbebezogene Verwendungen",
          text: "seagull-ltd.com kann Cookies verwenden, die die Wirksamkeit dieser Anzeigen messen oder Klickraten analysieren, um Anzeigen und ähnliche Inhalte im Rahmen der Interessengebiete der Nutzer über eigene oder Drittsysteme bereitzustellen."
        }
      ]
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A2342] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[#205B97] hover:text-[#00B8D9] dark:text-[#00B8D9] dark:hover:text-white mb-6 inline-block">
          ← {content[lang].backHome}
        </Link>
        <h1 className="text-4xl font-bold text-[#0A2342] dark:text-white mb-8">{content[lang].title}</h1>
        <div className="prose max-w-none text-gray-700 dark:text-gray-200">
          {content[lang].sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-2xl font-semibold text-[#205B97] dark:text-[#00B8D9] mb-3">{section.heading}</h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
