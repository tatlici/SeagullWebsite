
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
    isoTitle: string;
    isoDesc: string;
    isoButton: string;
    address: string;
  };
  const t: Record<Lang, Translation> = {
    en: {
      about: "About Us",
      aboutDesc: "Seagull Ltd is a premier supplier of OEM and high-quality spare parts for shipyards worldwide. With extensive industry experience and a commitment to excellence, we provide comprehensive solutions for maritime operations. Our expertise spans across marine equipment, engine components, electrical systems, and specialized shipyard supplies. We work closely with leading manufacturers and maintain strategic partnerships to ensure authentic parts and competitive pricing. Our dedicated team understands the critical nature of maritime operations and provides reliable, timely support to keep vessels operational. From routine maintenance to emergency requirements, Seagull Ltd delivers quality, integrity, and professional service that shipyards trust.",
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
      clientList: ["Şehir Hatları", "İstaç"],
      isoTitle: "ISO 9001:2015 Certification",
      isoDesc: "Seagull Ltd is proud to be certified to the ISO 9001:2015 standard, demonstrating our commitment to quality management and continuous improvement. This internationally recognized certification ensures that our processes meet the highest standards for customer satisfaction and operational excellence.",
      isoButton: "View ISO Certificate (PDF)",
      address: "Office Address"
    },
    tr: {
      about: "Hakkımızda",
      aboutDesc: "Seagull Ltd, dünya çapındaki tersanelere OEM ve yüksek kaliteli yedek parça tedarikinde önde gelen bir firmadır. Sektördeki geniş deneyimimiz ve mükemmelliğe olan bağlılığımızla, denizcilik operasyonları için kapsamlı çözümler sunuyoruz. Uzmanlığımız deniz ekipmanları, motor bileşenleri, elektrik sistemleri ve özelleştirilmiş tersane malzemelerini kapsamaktadır. Önde gelen üreticilerle yakın çalışıyor ve orijinal parçalar ile rekabetçi fiyatlandırma sağlamak için stratejik ortaklıklar sürdürüyoruz. Denizcilik operasyonlarının kritik doğasını anlayan uzman ekibimiz, gemilerin operasyonel kalması için güvenilir ve zamanında destek sağlar. Rutin bakımdan acil gereksinimlere kadar, Seagull Ltd tersanelerin güvendiği kalite, dürüstlük ve profesyonel hizmet sunar.",
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
      clientList: ["Şehir Hatları", "İstaç"],
      isoTitle: "ISO 9001:2015 Sertifikası",
      isoDesc: "Seagull Ltd, kalite yönetimi ve sürekli iyileştirmeye olan bağlılığımızı gösteren ISO 9001:2015 standardı ile sertifikalandırılmaktan gurur duyar. Uluslararası kabul görmüş bu sertifika, süreçlerimizin müşteri memnuniyeti ve operasyonel mükemmellik için en yüksek standartları karşıladığını garanti eder.",
      isoButton: "ISO Sertifikasını Görüntüle (PDF)",
      address: "Ofis Adresi"
    },
    de: {
      about: "Über Uns",
      aboutDesc: "Seagull Ltd ist ein führender Anbieter von OEM- und hochwertigen Ersatzteilen für Werften weltweit. Mit umfangreicher Branchenerfahrung und einem Engagement für Exzellenz bieten wir umfassende Lösungen für maritime Operationen. Unsere Expertise erstreckt sich über Schiffsausrüstung, Motorenkomponenten, elektrische Systeme und spezialisierte Werftversorgung. Wir arbeiten eng mit führenden Herstellern zusammen und pflegen strategische Partnerschaften, um authentische Teile und wettbewerbsfähige Preise zu gewährleisten. Unser engagiertes Team versteht die kritische Natur maritimer Operationen und bietet zuverlässige, zeitnahe Unterstützung, um Schiffe betriebsbereit zu halten. Von Routinewartung bis zu Notfallanforderungen liefert Seagull Ltd Qualität, Integrität und professionellen Service, dem Werften vertrauen.",
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
      clientList: ["Şehir Hatları", "İstaç"],
      isoTitle: "ISO 9001:2015 Zertifizierung",
      isoDesc: "Seagull Ltd ist stolz darauf, nach ISO 9001:2015 zertifiziert zu sein, was unser Engagement für Qualitätsmanagement und kontinuierliche Verbesserung zeigt. Diese international anerkannte Zertifizierung stellt sicher, dass unsere Prozesse die höchsten Standards für Kundenzufriedenheit und operative Exzellenz erfüllen.",
      isoButton: "ISO-Zertifikat ansehen (PDF)",
      address: "Büroadresse"
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
      {/* Header - Sticky */}
      <header className="bg-[#0A2342] text-white flex items-center justify-between px-4 md:px-10 py-3 shadow-md sticky top-0 z-50">
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
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
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
      <section className="w-full bg-white py-0 px-0" id="banner">
        <div className="w-full relative flex items-center justify-center bg-white">
          <Image 
            src="/Slider1.png" 
            alt="Seagull Ltd Banner" 
            width={1920}
            height={1080}
            priority 
            className="object-contain w-full h-auto" 
            style={{ filter: 'brightness(1.1) contrast(1.05)' }}
          />
        </div>
      </section>



      {/* About Us */}
  <section className={`${dark ? "bg-[#0D1B2A] text-white" : "bg-[#F8F9FA] text-black"} py-20 px-6`} id="about">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center mb-8">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 font-inter ${dark ? "text-white" : "text-[#0A2342]"}`}>{t[lang].about}</h2>
          </div>
          <p className={`text-xl md:text-2xl leading-relaxed ${dark ? "text-gray-100" : "text-gray-800"}`}>{t[lang].aboutDesc}</p>
        </div>
      </section>

      {/* About visual between About and Vision */}
      <section className={`${dark ? "bg-[#0D1B2A]" : "bg-[#F8F9FA]"} py-8 px-6`} id="about-visual">
        <div className="w-full max-w-5xl h-96 md:h-[32rem] rounded-lg overflow-hidden shadow-lg flex items-center justify-center mx-auto">
          <Image src="/AboutUs.png" alt="About Seagull Ltd" width={1600} height={512} className="object-cover w-full h-full" />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={`${dark ? "bg-[#0A2342] text-white" : "bg-white text-black"} py-16 px-6`} id="vision">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Vision Card */}
            <div className={`flex flex-col items-center md:items-start text-center md:text-left p-6 rounded-lg shadow-sm h-full ${dark ? "bg-[#0D1B2A]" : "bg-[#F8F9FA]"}`}>
              <FontAwesomeIcon icon={faLightbulb} className="text-[#00B8D9] mb-4" style={{fontSize: '56px'}} />
              <h3 className={`text-xl font-semibold mb-2 font-inter ${dark ? "text-white" : "text-[#0A2342]"}`}>{t[lang].visionTitle}</h3>
              <p className={`leading-relaxed ${dark ? "text-gray-100" : "text-gray-800"}`}>{t[lang].visionDesc}</p>
            </div>
            {/* Mission Card */}
            <div className={`flex flex-col items-center md:items-start text-center md:text-left p-6 rounded-lg shadow-sm h-full ${dark ? "bg-[#0D1B2A]" : "bg-[#F8F9FA]"}`}>
              <FontAwesomeIcon icon={faHandshake} className="text-[#00B8D9] mb-4" style={{fontSize: '56px'}} />
              <h3 className={`text-xl font-semibold mb-2 font-inter ${dark ? "text-white" : "text-[#0A2342]"}`}>{t[lang].missionTitle}</h3>
              <p className={`leading-relaxed ${dark ? "text-gray-100" : "text-gray-800"}`}>{t[lang].missionDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className={`${dark ? "bg-[#0D1B2A] text-white" : "bg-[#F8F9FA] text-black"} py-16 px-6`} id="clients">
        <div className="max-w-5xl mx-auto text-center">
          <FontAwesomeIcon icon={faUsers} className="text-[#00B8D9] text-5xl mb-6" />
          <h2 className={`text-3xl font-semibold mb-4 font-inter ${dark ? "text-white" : "text-[#0A2342]"}`}>{t[lang].clients}</h2>
          <p className={`text-lg mb-10 ${dark ? "text-gray-100" : "text-gray-800"}`}>{t[lang].clientsDesc}</p>

          {/* Client Logos - Card Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-[#0A2342] rounded-lg shadow-lg p-8 flex items-center justify-center hover:shadow-xl transition-shadow duration-300">
              <ClientLogo png="/clients/sehir-hatlari.png" svg="/clients/sehir-hatlari.svg" alt="Şehir Hatları logo" />
            </div>
            <div className="bg-white dark:bg-[#0A2342] rounded-lg shadow-lg p-8 flex items-center justify-center hover:shadow-xl transition-shadow duration-300">
              <ClientLogo png="/clients/istac.png" svg="/clients/istac.svg" alt="İSTAÇ logo" />
            </div>
          </div>
        </div>

      </section>

      {/* ISO Certificate Section (immediately after Clients) */}
      <section className={`${dark ? "bg-[#0A2342] text-white" : "bg-white text-black"} py-16 px-6`} id="iso-certificate">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className={`text-3xl font-semibold mb-4 font-inter ${dark ? "text-white" : "text-[#0A2342]"}`}>{t[lang].isoTitle}</h2>
          <p className={`text-lg mb-4 max-w-xl mx-auto ${dark ? "text-gray-100" : "text-gray-800"}`}>
            {t[lang].isoDesc}
          </p>
          <a href="/seagull-iso.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#205B97] text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-[#4CA0E8] transition-colors duration-200">
            {t[lang].isoButton}
          </a>
        </div>
      </section>

      {/* Contact Information & Form */}
  <section className={`${dark ? "bg-[#0D1B2A] text-white" : "bg-[#F8F9FA] text-black"} py-16 px-6`} id="contact">
    <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-start">
      <div className="md:col-span-2 text-center md:text-left flex flex-col justify-center">
        <h2 className={`text-3xl font-semibold mb-4 font-inter ${dark ? "text-white" : "text-[#0A2342]"}`}>{t[lang].contactInfo}</h2>
        <div className={`flex flex-col gap-4 ${dark ? "text-gray-100" : "text-[#0A2342]"}`}>
          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon={faEnvelope} className={`text-2xl mt-1 ${dark ? "text-[#00B8D9]" : "text-[#205B97]"}`} />
            <span>info@seagull-ltd.com</span>
          </div>
          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon={faPhone} className={`text-2xl mt-1 ${dark ? "text-[#00B8D9]" : "text-[#205B97]"}`} />
            <span>+90 212 123 4567</span>
          </div>
          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon={faHandshake} className={`text-2xl mt-1 ${dark ? "text-[#00B8D9]" : "text-[#205B97]"}`} />
            <div>
              <p className="font-semibold mb-1">{t[lang].address}</p>
              <p className="text-sm">Esenyalı Mah. Yanyol Cad. Varyap Plaza No: 61 İç Kapı No: 247 Pendik/İstanbul</p>
            </div>
          </div>
        </div>
      </div>
      <form className={`md:col-span-3 p-10 rounded-lg shadow-md flex flex-col gap-6 min-w-0 border-2 ${dark ? "bg-[#0A2342] border-[#00B8D9]" : "bg-white border-[#205B97]"}`} method="POST" action="mailto:info@seagull-ltd.com" encType="text/plain">
        <h3 className={`text-xl font-semibold mb-2 font-inter ${dark ? "text-white" : "text-[#205B97]"}`}>{t[lang].contactUs}</h3>
              <input type="text" name="name" placeholder={t[lang].name} required className={`border rounded px-4 py-2 focus:outline-none focus:border-[#4CA0E8] font-helvetica uppercase ${dark ? "border-[#00B8D9] text-white bg-[#0D1B2A]" : "border-[#205B97] text-[#205B97] bg-white"}`} />
              <input type="email" name="email" placeholder={t[lang].email} required className={`border rounded px-4 py-2 focus:outline-none focus:border-[#4CA0E8] font-helvetica uppercase ${dark ? "border-[#00B8D9] text-white bg-[#0D1B2A]" : "border-[#205B97] text-[#205B97] bg-white"}`} />
              <textarea name="message" placeholder={t[lang].message} required className={`border rounded px-4 py-2 focus:outline-none focus:border-[#4CA0E8] font-helvetica uppercase ${dark ? "border-[#00B8D9] text-white bg-[#0D1B2A]" : "border-[#205B97] text-[#205B97] bg-white"}`} rows={4} />
        <button type="submit" className={`font-semibold px-6 py-2 rounded-full transition-colors duration-200 ${dark ? "bg-[#4CA0E8] text-[#0A2342] hover:bg-white hover:text-[#205B97]" : "bg-[#205B97] text-white hover:bg-[#4CA0E8] hover:text-[#205B97]"}`}>{t[lang].send}</button>
      </form>
    </div>
  </section>

      {/* Footer */}
  <footer className={`py-8 mt-auto ${dark ? "bg-[#0A2342] text-white" : "bg-[#205B97] text-white"}`}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
          {/* Left-aligned logo */}
          <div className="self-start md:self-auto">
            <Image src="/seagull-logo.png" alt="Seagull Ltd Logo" width={48} height={48} className="rounded object-contain" />
          </div>
          {/* Links */}
          <div className="flex justify-center gap-6 order-last md:order-none">
            <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#00B8D9] transition-colors">{t[lang].about}</a>
            <a href="#vision" onClick={(e) => { e.preventDefault(); document.querySelector('#vision')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#00B8D9] transition-colors">{t[lang].vision}</a>
            <a href="#clients" onClick={(e) => { e.preventDefault(); document.querySelector('#clients')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#00B8D9] transition-colors">{t[lang].clients}</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#00B8D9] transition-colors">{t[lang].contact}</a>
          </div>
          {/* Smaller powered-by text with link */}
          <div className="text-sm font-normal opacity-90">
            <a href="https://www.simplecodelabs.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00B8D9] transition-colors">
              {t[lang].powered}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
