
"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUsers, faLightbulb, faHandshake, faMoon, faSun, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  // (Slider removed)

  // Dark theme toggle
  const [dark, setDark] = useState(false);
  // Language switcher
  type Lang = "en" | "tr" | "de";
  const [lang, setLang] = useState<Lang>("en");
  const [showLangMenu, setShowLangMenu] = useState(false);
  type Translation = {
    about: string;
    aboutDesc: string;
    vision: string;
    visionTitle: string;
    visionDesc: string;
    mission: string;
    missionTitle: string;
    missionDesc: string;
    clients: string;
    clientsDesc: string;
    contact: string;
    contactUs: string;
    contactInfo: string;
    name: string;
    email: string;
    message: string;
    send: string;
    powered: string;
    heroTitle: string;
    heroDesc: string;
    clientList: string[];
  };
  const t: Record<Lang, Translation> = {
    en: {
      about: "About Us",
      aboutDesc: "Seagull Ltd is a leading supplier of OEM and spare parts for shipyards, committed to quality, reliability, and customer satisfaction. With years of experience, we support shipyards worldwide in maintaining and upgrading their fleets.",
      vision: "Vision & Mission",
      visionTitle: "Our Vision",
      visionDesc: "To be the preferred global supplier for shipyards, recognized for our integrity, innovation, and excellence.",
      mission: "Our Mission",
      missionTitle: "Our Mission",
      missionDesc: "Delivering high-quality OEM and spare parts, exceptional service, and value to our clients, helping them achieve operational success.",
      clients: "Clients",
      clientsDesc: "We are working with some of the biggest companies in the industry, supporting their shipyard operations with reliable parts and service.",
      contact: "Contact",
      contactUs: "Contact Us",
      contactInfo: "Contact Information",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      powered: "Powered by Simple Code Labs",
      heroTitle: "Supplying Shipyards with Quality OEM & Spare Parts",
      heroDesc: "Seagull Ltd is your trusted partner for shipyard supplies, delivering excellence and reliability worldwide.",
  clientList: ["Şehir Hatları", "İstaç"]
    },
    tr: {
      about: "Hakkımızda",
      aboutDesc: "Seagull Ltd, tersaneler için OEM ve yedek parça tedarikinde lider bir firmadır; kalite, güvenilirlik ve müşteri memnuniyetine bağlıdır. Yılların deneyimiyle, dünya çapında tersanelerin filolarını korumasına ve geliştirmesine destek oluyoruz.",
      vision: "Vizyon & Misyon",
      visionTitle: "Vizyonumuz",
      visionDesc: "Dürüstlük, yenilikçilik ve mükemmellik ile tanınan, tersaneler için tercih edilen küresel tedarikçi olmak.",
      mission: "Misyonumuz",
      missionTitle: "Misyonumuz",
      missionDesc: "Yüksek kaliteli OEM ve yedek parçalar, üstün hizmet ve değer sunarak müşterilerimizin operasyonel başarısına katkı sağlamak.",
      clients: "Müşterilerimiz",
      clientsDesc: "Sektördeki en büyük şirketlerle çalışıyor, tersane operasyonlarını güvenilir parça ve hizmetle destekliyoruz.",
      contact: "İletişim",
      contactUs: "Bize Ulaşın",
      contactInfo: "İletişim Bilgileri",
      name: "Adınız",
      email: "E-posta Adresiniz",
      message: "Mesajınız",
      send: "Mesaj Gönder",
      powered: "Simple Code Labs tarafından desteklenmektedir",
      heroTitle: "Tersanelere Kaliteli OEM ve Yedek Parça Tedariki",
      heroDesc: "Seagull Ltd, tersane tedariklerinde güvenilir ortağınız, mükemmellik ve güvenilirlik sunar.",
  clientList: ["Şehir Hatları", "İstaç"]
    },
    de: {
      about: "Über Uns",
      aboutDesc: "Seagull Ltd ist ein führender Anbieter von OEM- und Ersatzteilen für Werften und steht für Qualität, Zuverlässigkeit und Kundenzufriedenheit. Mit jahrelanger Erfahrung unterstützen wir Werften weltweit bei der Wartung und Modernisierung ihrer Flotten.",
      vision: "Vision & Mission",
      visionTitle: "Unsere Vision",
      visionDesc: "Der bevorzugte globale Lieferant für Werften zu sein, anerkannt für Integrität, Innovation und Exzellenz.",
      mission: "Unsere Mission",
      missionTitle: "Unsere Mission",
      missionDesc: "Lieferung hochwertiger OEM- und Ersatzteile, außergewöhnlicher Service und Mehrwert für unsere Kunden, um deren operativen Erfolg zu unterstützen.",
      clients: "Kunden",
      clientsDesc: "Wir arbeiten mit einigen der größten Unternehmen der Branche zusammen und unterstützen deren Werftbetrieb mit zuverlässigen Teilen und Service.",
      contact: "Kontakt",
      contactUs: "Kontaktieren Sie uns",
      contactInfo: "Kontaktinformationen",
      name: "Ihr Name",
      email: "Ihre E-Mail",
      message: "Ihre Nachricht",
      send: "Nachricht senden",
      powered: "Bereitgestellt von Simple Code Labs",
      heroTitle: "Lieferung von Qualitäts-OEM- und Ersatzteilen für Werften",
      heroDesc: "Seagull Ltd ist Ihr zuverlässiger Partner für Werftbedarf und liefert weltweit Exzellenz und Zuverlässigkeit.",
  clientList: ["Şehir Hatları", "İstaç"]
    },
  };

  // Prefer PNG logos, gracefully fall back to SVG if PNG is not uploaded yet
  function ClientLogo({ png, svg, alt }: { png: string; svg: string; alt: string }) {
    const [src, setSrc] = useState(png);
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className="object-contain w-full h-full"
        onError={() => {
          if (src !== svg) setSrc(svg);
        }}
      />
    );
  }

  return (
  <div className={`font-sans min-h-screen flex flex-col ${dark ? "bg-[#0A2342] text-white" : "bg-white text-black"}`}>
      {/* Header */}
      <header className="bg-[#0A2342] text-white flex items-center justify-between px-4 md:px-10 py-3 shadow-md">
        <div className="flex items-center gap-3 md:gap-6">
          <div className="w-14 h-14 relative flex items-center justify-center">
            <Image src="/seagull-logo.png" alt="Seagull Ltd Logo" width={56} height={56} className="rounded object-contain" />
          </div>
          <span className="text-xl md:text-2xl font-semibold tracking-wide whitespace-nowrap">Seagull Ltd</span>
        </div>
        <nav className="flex gap-4 md:gap-8 items-center flex-1 justify-end">
          {[{ label: t[lang].about, href: "#about" },
            { label: t[lang].vision, href: "#vision" },
            { label: t[lang].clients, href: "#clients" },
            { label: t[lang].contact, href: "#contact" }].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative font-semibold text-sm md:text-base transition-colors duration-200 hover:text-[#00B8D9] px-2 md:px-3 py-1"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#00B8D9] scale-x-0 hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
          {/* Dark theme toggle and language dropdown closer together */}
          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={() => setDark(!dark)}
              className={`px-3 py-1 rounded-full border border-[#00B8D9] text-[#00B8D9] bg-transparent transition-colors duration-200 hover:bg-[#00B8D9] hover:text-white flex items-center justify-center`}
              aria-label="Toggle dark mode"
            >
              <FontAwesomeIcon icon={dark ? faSun : faMoon} className="text-lg" />
            </button>
            <div className="relative">
              <button
                className="px-3 py-1 rounded-full border border-[#00B8D9] text-[#00B8D9] bg-transparent flex items-center justify-center"
                aria-label="Language menu"
                onClick={() => setShowLangMenu((v) => !v)}
              >
                <FontAwesomeIcon icon={faGlobe} className="text-lg" />
              </button>
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50">
                  <button
                    className={`w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-[#F8F9FA] ${lang === "en" ? "font-bold text-[#00B8D9]" : "text-gray-800"}`}
                    onClick={() => { setLang("en"); setShowLangMenu(false); }}
                  >
                    <span role="img" aria-label="English">🇬🇧</span> English
                  </button>
                  <button
                    className={`w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-[#F8F9FA] ${lang === "tr" ? "font-bold text-[#00B8D9]" : "text-gray-800"}`}
                    onClick={() => { setLang("tr"); setShowLangMenu(false); }}
                  >
                    <span role="img" aria-label="Turkish">🇹🇷</span> Türkçe
                  </button>
                  <button
                    className={`w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-[#F8F9FA] ${lang === "de" ? "font-bold text-[#00B8D9]" : "text-gray-800"}`}
                    onClick={() => { setLang("de"); setShowLangMenu(false); }}
                  >
                    <span role="img" aria-label="German">🇩🇪</span> Deutsch
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Banner Section (moved to top) */}
      <section className="w-full bg-[#F8F9FA] py-0 px-0" id="banner">
        <div className="w-full h-72 md:h-[28rem] relative overflow-hidden flex items-center justify-center bg-[#102B4E]">
          <Image 
            src="/Slider1.png" 
            alt="Seagull Ltd Banner" 
            fill 
            priority 
            className="object-contain w-full h-full" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#102B4E]/40 pointer-events-none" />
        </div>
      </section>



      {/* About Us */}
  <section className={`${dark ? "bg-[#102B4E] text-white" : "bg-[#F8F9FA] text-black"} py-16 px-6`} id="about">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-3xl font-semibold text-[#0A2342] mb-4 font-inter">{t[lang].about}</h2>
          </div>
          <p className="text-gray-700 text-lg">{t[lang].aboutDesc}</p>
        </div>
      </section>

      {/* About visual between About and Vision */}
      <section className={`${dark ? "bg-[#102B4E]" : "bg-[#F8F9FA]"} py-8 px-6`} id="about-visual">
        <div className="w-full max-w-5xl h-96 md:h-[32rem] rounded-lg overflow-hidden shadow-lg flex items-center justify-center mx-auto">
          <Image src="/AboutUs.png" alt="About Seagull Ltd" width={1600} height={512} className="object-cover w-full h-full" />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={`${dark ? "bg-[#0A2342] text-white" : "bg-white text-black"} py-16 px-6`} id="vision">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Vision Card */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 rounded-lg bg-[#F8F9FA] dark:bg-[#102B4E] shadow-sm h-full">
              <FontAwesomeIcon icon={faLightbulb} className="text-[#00B8D9] mb-4" style={{fontSize: '56px'}} />
              <h3 className="text-xl font-semibold text-[#0A2342] dark:text-white mb-2 font-inter">{t[lang].visionTitle}</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{t[lang].visionDesc}</p>
            </div>
            {/* Mission Card */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 rounded-lg bg-[#F8F9FA] dark:bg-[#102B4E] shadow-sm h-full">
              <FontAwesomeIcon icon={faHandshake} className="text-[#00B8D9] mb-4" style={{fontSize: '56px'}} />
              <h3 className="text-xl font-semibold text-[#0A2342] dark:text-white mb-2 font-inter">{t[lang].missionTitle}</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{t[lang].missionDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className={`${dark ? "bg-[#102B4E] text-white" : "bg-[#F8F9FA] text-black"} py-16 px-6`} id="clients">
        <div className="max-w-3xl mx-auto text-center">
          <FontAwesomeIcon icon={faUsers} className="text-[#00B8D9] text-5xl mb-6" />
          <h2 className="text-3xl font-semibold mb-4 font-inter">{t[lang].clients}</h2>
          <p className="text-lg mb-6">{t[lang].clientsDesc}</p>
          <ul className="flex flex-wrap justify-center gap-6 text-gray-800 text-base font-medium">
            {t[lang].clientList.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>

          {/* Client Logos */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-10">
            <div className="w-40 h-16">
              <ClientLogo png="/clients/sehir-hatlari.png" svg="/clients/sehir-hatlari.svg" alt="Şehir Hatları logo" />
            </div>
            <div className="w-40 h-16">
              <ClientLogo png="/clients/istac.png" svg="/clients/istac.svg" alt="İSTAÇ logo" />
            </div>
          </div>
        </div>

      </section>

      {/* ISO Certificate Section (immediately after Clients) */}
      <section className={`${dark ? "bg-[#183A5A] text-[#4CA0E8]" : "bg-[#EAF3FA] text-[#205B97]"} py-16 px-6`} id="iso-certificate">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-semibold mb-4 font-inter">ISO 9001:2015 Certification</h2>
          <p className="text-lg mb-4 max-w-xl mx-auto">
            Seagull Ltd is proud to be certified to the ISO 9001:2015 standard, demonstrating our commitment to quality management and continuous improvement. This internationally recognized certification ensures that our processes meet the highest standards for customer satisfaction and operational excellence.
          </p>
          <a href="/seagull-iso.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#205B97] text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-[#4CA0E8] transition-colors duration-200">
            View ISO Certificate (PDF)
          </a>
        </div>
      </section>

      {/* Contact Information & Form */}
  <section className={`${dark ? "bg-[#0A2342] text-white" : "bg-white text-black"} py-16 px-6`} id="contact">
    <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-start">
      <div className="md:col-span-2 text-center md:text-left flex flex-col justify-center">
        <h2 className="text-3xl font-semibold mb-4 font-inter text-[#205B97] dark:text-[#4CA0E8]">{t[lang].contactInfo}</h2>
        <div className="flex flex-col gap-4 text-[#205B97] dark:text-[#4CA0E8]">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#205B97] text-2xl" />
            <span>info@seagull-ltd.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-[#205B97] text-2xl" />
            <span>+90 212 123 4567</span>
          </div>
        </div>
      </div>
      <form className="md:col-span-3 bg-[#EAF3FA] dark:bg-[#183A5A] p-10 rounded-lg shadow-md flex flex-col gap-6 min-w-0 border-2 border-[#205B97] dark:border-[#4CA0E8]" method="POST" action="mailto:info@seagull-ltd.com" encType="text/plain">
        <h3 className="text-xl font-semibold mb-2 font-inter text-[#205B97] dark:text-[#4CA0E8]">{t[lang].contactUs}</h3>
              <input type="text" name="name" placeholder={t[lang].name} required className="border border-[#205B97] dark:border-[#4CA0E8] rounded px-4 py-2 focus:outline-none focus:border-[#4CA0E8] font-helvetica uppercase text-[#205B97] dark:text-[#205B97] bg-white dark:bg-white" />
              <input type="email" name="email" placeholder={t[lang].email} required className="border border-[#205B97] dark:border-[#4CA0E8] rounded px-4 py-2 focus:outline-none focus:border-[#4CA0E8] font-helvetica uppercase text-[#205B97] dark:text-[#205B97] bg-white dark:bg-white" />
              <textarea name="message" placeholder={t[lang].message} required className="border border-[#205B97] dark:border-[#4CA0E8] rounded px-4 py-2 focus:outline-none focus:border-[#4CA0E8] font-helvetica uppercase text-[#205B97] dark:text-[#205B97] bg-white dark:bg-white" rows={4} />
        <button type="submit" className={`font-semibold px-6 py-2 rounded-full transition-colors duration-200 ${dark ? "bg-[#4CA0E8] text-[#0A2342] hover:bg-white hover:text-[#205B97]" : "bg-[#205B97] text-white hover:bg-[#4CA0E8] hover:text-[#205B97]"}`}>{t[lang].send}</button>
      </form>
    </div>
  </section>

      {/* Footer */}
  <footer className={`py-8 mt-auto ${dark ? "bg-[#183A5A] text-[#4CA0E8]" : "bg-[#205B97] text-white"}`}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
          {/* Left-aligned logo */}
          <div className="self-start md:self-auto">
            <Image src="/seagull-logo.png" alt="Seagull Ltd Logo" width={48} height={48} className="rounded object-contain" />
          </div>
          {/* Links */}
          <div className="flex justify-center gap-6 order-last md:order-none">
            <a href="#about" className="hover:text-[#00B8D9] transition-colors">{t[lang].about}</a>
            <a href="#vision" className="hover:text-[#00B8D9] transition-colors">{t[lang].vision}</a>
            <a href="#clients" className="hover:text-[#00B8D9] transition-colors">{t[lang].clients}</a>
            <a href="#contact" className="hover:text-[#00B8D9] transition-colors">{t[lang].contact}</a>
          </div>
          {/* Smaller powered-by text */}
          <div className="text-sm font-normal opacity-90">
            <span>{t[lang].powered}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
