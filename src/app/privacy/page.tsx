"use client";
import Link from "next/link";
import { useState } from "react";

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<"en" | "tr" | "de">("tr");

  const content = {
    en: {
      title: "Privacy Policy",
      backHome: "Back to Home",
      intro: "By using this website, you accept the processing of your personal data. Your security is important to us. Therefore, the personal data you share with us is carefully protected.",
      sections: [
        {
          heading: "Data Controller",
          text: "As the Company, as the data controller, we aim to inform our users about which of your personal data will be processed for which purposes, with whom and for what reasons the processed data may be shared, our data processing method and legal reasons, and what your rights are regarding the processed data, within the scope of this privacy and personal data protection policy."
        },
        {
          heading: "Collected Personal Data",
          text: "Personal data collected by this website:\n• Device information\n• IP address"
        },
        {
          heading: "Services Used",
          subsections: [
            {
              subheading: "Infrastructure Services",
              text: "Cloudflare: Used for site security and performance optimization. Provides DDoS protection, SSL certificate, and CDN services.\n\nDigitalOcean: Used for infrastructure and hosting services. Your data may be stored on DigitalOcean servers."
            },
            {
              subheading: "Analytics and Tracking",
              text: "Google Analytics: Used to analyze visitor behavior and site usage. This service provides detailed reports on visitor traffic, interactions, and user behavior."
            }
          ]
        },
        {
          heading: "Data Processing Purposes",
          text: "Your personal data is processed for the purposes of providing appropriate services by this website, fulfilling legal obligations, improving service quality, communication, security, and sharing information with legal authorities when necessary. Your personal data will not be used for purposes other than those listed."
        },
        {
          heading: "Data Transfer",
          text: "Your personal data collected by this website is not shared with third parties without your explicit consent, except for legal obligations. However, it may be shared with our service providers, business partners, and legal authorities to the extent necessary for the provision of the service and the fulfillment of legal obligations."
        },
        {
          heading: "Cookie Usage",
          text: "This website uses cookies. Cookies are low-volume rich text format text files that allow certain information about users to be stored on users' terminal devices when a website is visited. Cookies can be stored on your device via your browser during your first visit to a website, and when you revisit the same site with the same device, your browser checks whether there is a cookie registered in the name of the site on your device. If there is a record, it transmits the data in the record to the website you are visiting. In this way, the website detects your previous visit and determines the content to be delivered to you accordingly."
        },
        {
          heading: "Your Legal Rights - KVKK Rights",
          text: "In accordance with Article 11 of Law No. 6698 (KVKK), everyone has the right to apply to the data controller and make the following requests:\n\n• To learn whether personal data is being processed\n• To request information if personal data has been processed\n• To learn the purpose of processing personal data and whether they are used in accordance with their purpose\n• To know the third parties to whom personal data is transferred domestically or abroad\n• To request correction if personal data is processed incompletely or incorrectly\n• To request deletion or destruction of personal data within the framework of the conditions stipulated in Article 7 of KVKK\n• To request notification of transactions made as a result of correction, deletion, and destruction requests to third parties to whom personal data has been transferred\n• To object to the emergence of a result against the person by analyzing the processed data exclusively through automated systems\n• To request compensation for damages in case of damage due to illegal processing of personal data"
        },
        {
          heading: "Contact",
          text: "To exercise your rights regarding your personal data or to get more information about our privacy policy, you can contact us at info@seagull-ltd.com."
        },
        {
          heading: "Consent and Entry into Force",
          text: "Sharing your personal data with our website is entirely your choice. If you continue to use our website, it will be assumed that you accept this privacy policy. This policy entered into force on March 25, 2025 and will be updated as needed."
        }
      ]
    },
    tr: {
      title: "Gizlilik Politikası",
      backHome: "Ana Sayfaya Dön",
      intro: "Bu İnternet sitesini kullanarak kişisel verilerinizin işlenmesini kabul etmiş olursunuz. Güvenliğiniz bizim için önemli. Bu sebeple, bizimle paylaşacağınız kişisel verileriniz hassasiyetle korunmaktadır.",
      sections: [
        {
          heading: "Veri Sorumlusu",
          text: "Biz, Şirket, veri sorumlusu olarak, bu gizlilik ve kişisel verilerin korunması politikası ile ziyaret etmekte olduğunuz İnternet sitesi kapsamında hangi kişisel verilerinizin hangi amaçlarla işleneceği, işlenen verilerin kimlerle ve hangi sebeplerle paylaşılabileceği, veri işleme yöntemimiz ve hukuki sebepleri ile; işlenen verilerinize ilişkin haklarınızın neler olduğu hususunda siz kullanıcılarımızı aydınlatmayı amaçlıyoruz."
        },
        {
          heading: "Toplanan Kişisel Veriler",
          text: "Bu İnternet sitesi tarafından toplanan kişisel verileriniz:\n• Cihaz bilgileri\n• IP adresi"
        },
        {
          heading: "Kullanılan Servisler",
          subsections: [
            {
              subheading: "Altyapı servisleri",
              text: "Cloudflare: Cloudflare, site güvenliği ve performans optimizasyonu için kullanılmaktadır. DDoS koruması, SSL sertifikası ve CDN hizmetleri sağlar.\n\nDigitalOcean: DigitalOcean, altyapı ve barındırma hizmetleri için kullanılmaktadır. Verileriniz DigitalOcean sunucularında saklanabilir."
            },
            {
              subheading: "Analitik ve izleme",
              text: "Google Analytics: Google Analytics, ziyaretçi davranışlarını ve site kullanımını analiz etmek için kullanılmaktadır. Bu hizmet, ziyaretçi trafiği, etkileşimler ve kullanıcı davranışları hakkında detaylı raporlar sağlar."
            }
          ]
        },
        {
          heading: "Verilerin İşlenme Amaçları",
          text: "Kişisel verileriniz, bu İnternet sitesi tarafından amacına uygun hizmet sunulabilmesi, yasal yükümlülüklerin yerine getirilmesi, hizmet kalitesinin artırılması, iletişim, güvenlik ve gerektiğinde yasal merciler ile bilgi paylaşılabilmesi amaçları ile işlenmektedir. Kişisel verileriniz, bu sayılan amaçlar dışında kullanılmayacaktır."
        },
        {
          heading: "Verilerin Aktarılması",
          text: "Bu İnternet sitesi tarafından toplanan kişisel verileriniz, yasal zorunluluklar haricinde, açık rızanız olmadan üçüncü kişiler ile paylaşılmaz. Ancak hizmet sağlayıcılarımız, iş ortaklarımız ve yasal merciler ile, hizmetin sağlanması ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla gerekli olduğu ölçüde paylaşılabilir."
        },
        {
          heading: "Çerez Kullanımı",
          text: "Bu İnternet sitesi çerez kullanmaktadır. Çerezler, bir İnternet sayfası ziyaret edildiğinde kullanıcılara ilişkin birtakım bilgilerin kullanıcıların terminal cihazlarında depolanmasına izin veren düşük boyutlu zengin metin biçimli text formatlarıdır. Çerezler, bir İnternet sitesini ilk ziyaretiniz sırasında tarayıcınız aracılığıyla cihazınıza depolanabilir ve aynı siteyi aynı cihazla tekrar ziyaret ettiğinizde, tarayıcınız cihazınızda site adına kayıtlı bir çerez olup olmadığını kontrol eder. Eğer kayıt var ise, kaydın içindeki veriyi ziyaret etmekte olduğunuz İnternet sitesine iletir. Bu sayede İnternet sitesi, sizin daha önceki ziyaretinizi tespit eder ve size iletilecek içeriği ona göre belirler."
        },
        {
          heading: "Yasal Haklarınız - KVKK Kapsamında Haklarınız",
          text: "6698 sayılı KVKK madde 11 uyarınca herkes, veri sorumlusuna başvurarak kendisiyle ilgili aşağıda yer alan taleplerde bulunma hakkına sahiptir:\n\n• Kişisel verilerinin işlenip işlenmediğini öğrenme\n• Kişisel verileri işlenmişse buna ilişkin bilgi talep etme\n• Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme\n• Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme\n• Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme\n• KVKK madde 7 ile öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme\n• Düzeltme, silme ve yok edilme talepleri neticesinde yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme\n• İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme\n• Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme"
        },
        {
          heading: "İletişim",
          text: "Kişisel verilerinizle ilgili haklarınızı kullanmak veya gizlilik politikamız hakkında daha fazla bilgi almak için info@seagull-ltd.com adresinden bizimle iletişime geçebilirsiniz."
        },
        {
          heading: "Onay ve Yürürlük",
          text: "İnternet sitemiz ile kişisel verilerinizi paylaşmak, tamamen sizin tercihinizdir. İnternet sitemizi kullanmaya devam ettiğiniz takdirde, bu gizlilik politikasını kabul ettiğiniz varsayılacaktır. Bu politika, 25 Mart 2025 tarihinde yürürlüğe girmiş olup, gerektiğinde güncellenir."
        }
      ]
    },
    de: {
      title: "Datenschutzrichtlinie",
      backHome: "Zurück zur Startseite",
      intro: "Durch die Nutzung dieser Website akzeptieren Sie die Verarbeitung Ihrer persönlichen Daten. Ihre Sicherheit ist uns wichtig. Daher werden die persönlichen Daten, die Sie mit uns teilen, sorgfältig geschützt.",
      sections: [
        {
          heading: "Datenverantwortlicher",
          text: "Wir, das Unternehmen, als Datenverantwortlicher, zielen darauf ab, unsere Nutzer im Rahmen dieser Datenschutz- und Datenschutzrichtlinie darüber zu informieren, welche Ihrer persönlichen Daten zu welchen Zwecken verarbeitet werden, mit wem und aus welchen Gründen die verarbeiteten Daten geteilt werden können, unsere Datenverarbeitungsmethode und rechtliche Gründe sowie welche Rechte Sie in Bezug auf die verarbeiteten Daten haben."
        },
        {
          heading: "Gesammelte persönliche Daten",
          text: "Von dieser Website gesammelte persönliche Daten:\n• Geräteinformationen\n• IP-Adresse"
        },
        {
          heading: "Verwendete Dienste",
          subsections: [
            {
              subheading: "Infrastrukturdienste",
              text: "Cloudflare: Wird für Website-Sicherheit und Leistungsoptimierung verwendet. Bietet DDoS-Schutz, SSL-Zertifikat und CDN-Dienste.\n\nDigitalOcean: Wird für Infrastruktur- und Hosting-Dienste verwendet. Ihre Daten können auf DigitalOcean-Servern gespeichert werden."
            },
            {
              subheading: "Analytik und Tracking",
              text: "Google Analytics: Wird verwendet, um Besucherverhalten und Website-Nutzung zu analysieren. Dieser Dienst bietet detaillierte Berichte über Besucherverkehr, Interaktionen und Nutzerverhalten."
            }
          ]
        },
        {
          heading: "Zwecke der Datenverarbeitung",
          text: "Ihre persönlichen Daten werden zu den Zwecken verarbeitet, angemessene Dienstleistungen durch diese Website bereitzustellen, gesetzliche Verpflichtungen zu erfüllen, die Servicequalität zu verbessern, Kommunikation, Sicherheit und gegebenenfalls Informationen mit Rechtsbehörden zu teilen. Ihre persönlichen Daten werden nicht für andere als die aufgeführten Zwecke verwendet."
        },
        {
          heading: "Datenübertragung",
          text: "Ihre von dieser Website gesammelten persönlichen Daten werden nicht ohne Ihre ausdrückliche Zustimmung an Dritte weitergegeben, außer bei gesetzlichen Verpflichtungen. Sie können jedoch in dem für die Bereitstellung der Dienstleistung und die Erfüllung gesetzlicher Verpflichtungen erforderlichen Umfang an unsere Dienstleister, Geschäftspartner und Rechtsbehörden weitergegeben werden."
        },
        {
          heading: "Cookie-Verwendung",
          text: "Diese Website verwendet Cookies. Cookies sind kleine Rich-Text-Formatdateien, die es ermöglichen, bestimmte Informationen über Benutzer auf den Endgeräten der Benutzer zu speichern, wenn eine Website besucht wird. Cookies können bei Ihrem ersten Besuch einer Website über Ihren Browser auf Ihrem Gerät gespeichert werden, und wenn Sie dieselbe Website mit demselben Gerät erneut besuchen, überprüft Ihr Browser, ob auf Ihrem Gerät ein Cookie im Namen der Website registriert ist. Wenn ein Datensatz vorhanden ist, überträgt er die Daten im Datensatz an die Website, die Sie besuchen. Auf diese Weise erkennt die Website Ihren vorherigen Besuch und bestimmt den Inhalt, der Ihnen entsprechend zugestellt werden soll."
        },
        {
          heading: "Ihre gesetzlichen Rechte",
          text: "Gemäß Artikel 11 des Gesetzes Nr. 6698 hat jeder das Recht, sich an den Datenverantwortlichen zu wenden und die folgenden Anfragen zu stellen:\n\n• Zu erfahren, ob persönliche Daten verarbeitet werden\n• Informationen anzufordern, wenn persönliche Daten verarbeitet wurden\n• Den Zweck der Verarbeitung persönlicher Daten zu erfahren und ob sie ihrem Zweck entsprechend verwendet werden\n• Die Dritten zu kennen, an die persönliche Daten im In- oder Ausland übertragen werden\n• Die Berichtigung anzufordern, wenn persönliche Daten unvollständig oder falsch verarbeitet wurden\n• Die Löschung oder Vernichtung persönlicher Daten im Rahmen der in Artikel 7 des KVKK vorgesehenen Bedingungen zu verlangen\n• Die Benachrichtigung von Transaktionen an Dritte zu verlangen, an die persönliche Daten übertragen wurden\n• Gegen ein Ergebnis zu widersprechen, das durch die ausschließliche Analyse der verarbeiteten Daten durch automatisierte Systeme gegen die Person entsteht\n• Schadensersatz zu verlangen, falls aufgrund illegaler Verarbeitung persönlicher Daten ein Schaden entstanden ist"
        },
        {
          heading: "Kontakt",
          text: "Um Ihre Rechte in Bezug auf Ihre persönlichen Daten auszuüben oder weitere Informationen zu unserer Datenschutzrichtlinie zu erhalten, können Sie uns unter info@seagull-ltd.com kontaktieren."
        },
        {
          heading: "Zustimmung und Inkrafttreten",
          text: "Die Weitergabe Ihrer persönlichen Daten an unsere Website liegt ganz bei Ihnen. Wenn Sie unsere Website weiterhin nutzen, wird davon ausgegangen, dass Sie diese Datenschutzrichtlinie akzeptieren. Diese Richtlinie trat am 25. März 2025 in Kraft und wird bei Bedarf aktualisiert."
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
        <h1 className="text-4xl font-bold text-[#0A2342] dark:text-white mb-6">{content[lang].title}</h1>
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-8">{content[lang].intro}</p>
        <div className="space-y-8">
          {content[lang].sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-[#205B97] dark:text-[#00B8D9] mb-3">{section.heading}</h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line">{section.text}</p>
              {section.subsections && (
                <div className="mt-4 ml-6 space-y-4">
                  {section.subsections.map((sub, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="text-xl font-medium text-[#205B97] dark:text-[#4CA0E8] mb-2">{sub.subheading}</h3>
                      <p className="text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line">{sub.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
