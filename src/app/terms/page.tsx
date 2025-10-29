"use client";
import Link from "next/link";
import { useState } from "react";

export default function TermsOfService() {
  const [lang, setLang] = useState<"en" | "tr" | "de">("tr");

  const content = {
    en: {
      title: "Terms of Service",
      backHome: "Back to Home",
      intro: "These Terms of Service contain the rules you must follow when using the website at seagull-ltd.com. Please read these terms carefully before continuing to use the website.",
      sections: [
        {
          heading: "Scope and Changes",
          text: "The website at seagull-ltd.com is operated by the Company. These Terms of Service determine the rules to be applied during the use of the website and the rights and obligations of the parties. If you continue to use the website, it will be assumed that you accept these terms."
        },
        {
          heading: "Service Content and Use",
          text: "The services offered by this website are designed to be used in accordance with legal regulations. Users are obliged to comply with all laws, regulations, and international conventions and customs when using the website. The Company reserves the right to change, suspend, or terminate its services at any time, for any reason, without prior notice."
        },
        {
          heading: "User Obligations",
          text: "Users of this website are obliged to comply with the following rules:\n\n• Not to make illegal posts that constitute a crime\n• Not to engage in actions that violate the intellectual property rights of third parties\n• Not to spread malicious software or exploit security vulnerabilities\n• Not to use the services provided in a manner contrary to their purpose or to abuse them\n• Not to engage in behaviors that would prevent other users from benefiting from the services provided"
        },
        {
          heading: "Privacy Policy",
          text: "By continuing to use this website, you accept our Privacy Policy. Please review our Privacy Policy for detailed information on how your personal data is collected, used, and protected."
        },
        {
          heading: "Intellectual Property Rights",
          text: "All content, design, logos, software, and other materials on the website are subject to the Company's intellectual property and copyrights and are protected by the law on intellectual and artistic works and other legal regulations. Unauthorized use, copying, reproduction, modification, or distribution of these contents is prohibited."
        },
        {
          heading: "General Provisions",
          text: "• All users accept and undertake that by continuing to use the website, they will use this platform in accordance with the law and morality and only for personal purposes and will not engage in actions that violate the rights of third parties.\n• Users are legally and criminally responsible for their actions and transactions within the website.\n• We do our best to ensure the accuracy and timeliness of the information on the website. However, despite all these efforts, this information may lag behind actual changes and there may be some differences.\n• The website may contain hyperlinks to other websites, applications, and platforms operated by third parties whose contents are unknown to us. The Company only provides access to these sites and accepts no responsibility for their contents.\n• Although we do our best to keep the website free of viruses, we do not guarantee that it is completely free of viruses. Therefore, it is the users' responsibility to take the necessary precautions against viruses when downloading data."
        },
        {
          heading: "Limitation of Liability",
          text: "The Company cannot be held responsible for any direct, indirect, special, or punitive damages that may arise from the use of the website. Our website is provided \"as is\" and no guarantee is given that it will operate uninterruptedly or without errors."
        },
        {
          heading: "Dispute Resolution",
          text: "In disputes that may arise from the use of this website, Istanbul courts and execution offices will be authorized. These conditions will be interpreted and applied according to Turkish laws."
        },
        {
          heading: "Final Provisions",
          text: "These Terms of Service entered into force on March 25, 2025, and if you continue to use the website, it will be assumed that you accept these Terms of Service. If any provision in the terms of use is invalid..."
        }
      ]
    },
    tr: {
      title: "Kullanım Koşulları",
      backHome: "Ana Sayfaya Dön",
      intro: "Bu Kullanım Koşulları, seagull-ltd.com adresindeki İnternet sitesini kullanırken uymanız gereken kuralları içermektedir. Lütfen İnternet sitesini kullanmaya devam etmeden önce bu koşulları dikkatli bir şekilde okuyunuz.",
      sections: [
        {
          heading: "Kapsam ve Değişiklikler",
          text: "seagull-ltd.com adresindeki İnternet sitesi, Şirket tarafından işletilmektedir. Bu Kullanım Koşulları, İnternet sitesi kullanımı sırasında uygulanacak kuralları ve tarafların hak ve yükümlülüklerini belirlemektedir. İnternet sitesini kullanmaya devam ettiğiniz takdirde bu koşulları kabul ettiğini varsayılacaktır."
        },
        {
          heading: "Hizmet İçeriği ve Kullanım",
          text: "Bu İnternet sitesi tarafından sunulan hizmetler, yasal mevzuatlara uygun bir şekilde kullanılmak üzere tasarlanmıştır. Kullanıcılar, İnternet sitesini kullanırken tüm yasa, tüzük ve yönetmelikler ile uluslararası sözleşmelere ve teamüllere uymakla yükümlüdür. Şirket, herhangi bir zamanda, herhangi bir nedenle, önceden bildirimde bulunmaksızın hizmetlerini değiştirme, askıya alma veya sonlandırma hakkını saklı tutar."
        },
        {
          heading: "Kullanıcı Yükümlülükleri",
          text: "Bu İnternet sitesinin kullanıcıları aşağıda yer alan kurallara uymakla yükümlüdür:\n\n• Yasalara aykırı ve suç teşkil eder nitelikte paylaşımlarda bulunmamak\n• Üçüncü kişilerin fikri mülkiyet haklarını ihlal eder nitelikte eylemlerde bulunmamak\n• Kötü amaçlı yazılımları yaymamak veya güvenlik açıklarını istismar etmemek\n• Sunulan hizmetleri amacına aykırı bir şekilde veya kötüye kullanmamak\n• Diğer kullanıcıların sunulan hizmetlerden yararlanmalarını engelleyecek nitelikte davranışlarda bulunmamak"
        },
        {
          heading: "Gizlilik Politikası",
          text: "Bu İnternet sitesini kullanmaya devam etmekle Gizlilik Politika'mızı kabul etmiş olursunuz. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi için lütfen Gizlilik Politikamızı inceleyin."
        },
        {
          heading: "Fikri Mülkiyet Hakları",
          text: "İnternet sitesinde yer alan tüm içerik, tasarım, logo, yazılım ve sair materyaller, Şirket fikri mülkiyet ve telif haklarına haiz olup, fikir ve sanat eserleri kanunu ve sair yasal mevzuatlarca korunmaktadır. Bu içeriklerin izinsiz kullanımı, kopyalanması, çoğaltılması, değiştirilmesi veya dağıtılması yasaktır."
        },
        {
          heading: "Genel Hükümler",
          text: "• Kullanıcıların tamamı, İnternet sitesini kullanmaya devam etmekle işbu platformu, hukuka ve ahlaka uygun bir şekilde ve yalnızca kişisel amaçlar ile sınırlı olmak üzere kullanacaklarını ve üçüncü kişinin haklarını ihlal eder nitelikte eylemlerde bulunmayacaklarını kabul ve taahhüt ederler.\n• Kullanıcıların, İnternet sitesi dahilinde yaptıkları işlem ve eylemlerindeki, hukuki ve cezai sorumlulukları kendilerine aittir.\n• İnternet sitesinde yer alan bilgilerin doğruluk ve güncelliğini sağlamak için elimizden geleni yapmaktayız. Ancak gösterdiğimiz tüm bu çabaya rağmen bu bilgiler, fiili değişikliklerin gerisinde kalabilir, birtakım farklılıklar olabilir.\n• İnternet sitesinde üçüncü şahıslar tarafından işletilen ve içerikleri tarafımızca bilinmeyen diğer İnter sitelerine, uygulamalara ve platformlara köprüler (hyperlink) bulunabilir. Şirket, yalnızca bu sitelere ulaşımı sağlamakta olup, içerikleri ile ilgili hiçbir sorumluluk kabul etmemektedir.\n• İnternet sitesini virüslerden arındırılmış olarak tutmak konusunda elimizden geleni yapsak da, virüslerin tamamen bulunmadığı garantisini vermemekteyiz. Bu nedenle veri indirirken, virüslere karşı gerekli önlemi almak, kullanıcıların sorumluluğundadır."
        },
        {
          heading: "Sorumluluk Sınırları",
          text: "Şirket, İnternet sitesinin kullanımından doğabilecek doğrudan, dolaylı, özel veya cezai hiçbir zarardan sorumlu tutulamaz. İnternet sitemiz, \"olduğu gibi\" sunulmaktadır ve kesintisiz veya hatasız çalışacağına dair herhangi bir garanti verilmemektedir."
        },
        {
          heading: "Uyuşmazlık Çözümü",
          text: "Bu İnternet sitesinin kullanımından doğabilecek uyuşmazlıklarda, İstanbul mahkemeleri ve icra daireleri yetkili olacaktır. Bu koşullar, Türkiye kanunlarına göre yorumlanacak ve uygulanacaktır."
        },
        {
          heading: "Son Hükümler",
          text: "Bu Kullanım Koşulları, 25 Mart 2025 tarihinde yürürlüğe girmiş olup, İnternet sitesini kullanmaya devam ettiğiniz takdirde işbu Kullanım Koşulları'nı kabul ettiğiniz varsayılacaktır. Kullanım koşulları içerisinde yer alan herhangi bir hükmün geçersiz..."
        }
      ]
    },
    de: {
      title: "Nutzungsbedingungen",
      backHome: "Zurück zur Startseite",
      intro: "Diese Nutzungsbedingungen enthalten die Regeln, die Sie bei der Nutzung der Website unter seagull-ltd.com befolgen müssen. Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie die Website weiter nutzen.",
      sections: [
        {
          heading: "Umfang und Änderungen",
          text: "Die Website unter seagull-ltd.com wird vom Unternehmen betrieben. Diese Nutzungsbedingungen legen die während der Nutzung der Website anzuwendenden Regeln sowie die Rechte und Pflichten der Parteien fest. Wenn Sie die Website weiterhin nutzen, wird davon ausgegangen, dass Sie diese Bedingungen akzeptieren."
        },
        {
          heading: "Dienstinhalt und Nutzung",
          text: "Die von dieser Website angebotenen Dienste sind so konzipiert, dass sie in Übereinstimmung mit den gesetzlichen Bestimmungen genutzt werden. Benutzer sind verpflichtet, alle Gesetze, Vorschriften und internationalen Konventionen und Gepflogenheiten bei der Nutzung der Website einzuhalten. Das Unternehmen behält sich das Recht vor, seine Dienste jederzeit aus beliebigem Grund ohne vorherige Ankündigung zu ändern, auszusetzen oder zu beenden."
        },
        {
          heading: "Benutzerpflichten",
          text: "Benutzer dieser Website sind verpflichtet, die folgenden Regeln einzuhalten:\n\n• Keine illegalen Beiträge zu veröffentlichen, die eine Straftat darstellen\n• Keine Handlungen vorzunehmen, die die geistigen Eigentumsrechte Dritter verletzen\n• Keine bösartige Software zu verbreiten oder Sicherheitslücken auszunutzen\n• Die angebotenen Dienste nicht zweckwidrig oder missbräuchlich zu nutzen\n• Sich nicht so zu verhalten, dass andere Benutzer daran gehindert werden, die angebotenen Dienste zu nutzen"
        },
        {
          heading: "Datenschutzrichtlinie",
          text: "Durch die weitere Nutzung dieser Website akzeptieren Sie unsere Datenschutzrichtlinie. Bitte lesen Sie unsere Datenschutzrichtlinie für detaillierte Informationen darüber, wie Ihre persönlichen Daten gesammelt, verwendet und geschützt werden."
        },
        {
          heading: "Rechte an geistigem Eigentum",
          text: "Alle Inhalte, Designs, Logos, Software und andere Materialien auf der Website unterliegen den geistigen Eigentums- und Urheberrechten des Unternehmens und sind durch das Gesetz über geistige und künstlerische Werke und andere gesetzliche Bestimmungen geschützt. Die unbefugte Nutzung, das Kopieren, die Vervielfältigung, die Änderung oder die Verbreitung dieser Inhalte ist verboten."
        },
        {
          heading: "Allgemeine Bestimmungen",
          text: "• Alle Benutzer akzeptieren und verpflichten sich, dass sie durch die weitere Nutzung der Website diese Plattform in Übereinstimmung mit Gesetz und Moral und nur für persönliche Zwecke nutzen und keine Handlungen vornehmen werden, die die Rechte Dritter verletzen.\n• Die Benutzer sind rechtlich und strafrechtlich für ihre Handlungen und Transaktionen innerhalb der Website verantwortlich.\n• Wir tun unser Bestes, um die Richtigkeit und Aktualität der Informationen auf der Website sicherzustellen. Trotz all dieser Bemühungen können diese Informationen hinter tatsächlichen Änderungen zurückbleiben und es kann einige Unterschiede geben.\n• Die Website kann Hyperlinks zu anderen Websites, Anwendungen und Plattformen enthalten, die von Dritten betrieben werden und deren Inhalte uns unbekannt sind. Das Unternehmen stellt lediglich den Zugang zu diesen Websites bereit und übernimmt keine Verantwortung für deren Inhalte.\n• Obwohl wir unser Bestes tun, um die Website virenfrei zu halten, geben wir keine Garantie, dass sie vollständig virenfrei ist. Daher liegt es in der Verantwortung der Benutzer, beim Herunterladen von Daten die notwendigen Vorsichtsmaßnahmen gegen Viren zu treffen."
        },
        {
          heading: "Haftungsbeschränkung",
          text: "Das Unternehmen kann nicht für direkte, indirekte, besondere oder Strafschäden haftbar gemacht werden, die aus der Nutzung der Website entstehen können. Unsere Website wird \"wie besehen\" bereitgestellt und es wird keine Garantie dafür gegeben, dass sie ununterbrochen oder fehlerfrei funktioniert."
        },
        {
          heading: "Streitbeilegung",
          text: "Bei Streitigkeiten, die aus der Nutzung dieser Website entstehen können, sind die Gerichte und Vollstreckungsbehörden in Istanbul zuständig. Diese Bedingungen werden gemäß türkischem Recht ausgelegt und angewendet."
        },
        {
          heading: "Schlussbestimmungen",
          text: "Diese Nutzungsbedingungen traten am 25. März 2025 in Kraft, und wenn Sie die Website weiterhin nutzen, wird davon ausgegangen, dass Sie diese Nutzungsbedingungen akzeptieren. Sollte eine Bestimmung in den Nutzungsbedingungen ungültig sein..."
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
