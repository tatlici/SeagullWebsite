"use client";
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(necessaryOnly));
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#0A2342] border-t-2 border-[#205B97] shadow-2xl z-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#0A2342] dark:text-white mb-2">
              🍪 Bu site çerezleri kullanır
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              Web sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz. Tercihlerinizi aşağıdan özelleştirebilirsiniz.{" "}
              <a href="/cookies" className="text-[#205B97] hover:text-[#4CA0E8] underline">
                Çerez Politikası
              </a>
            </p>
            
            {/* Cookie Preferences */}
            <div className="space-y-2 mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="w-4 h-4"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Zorunlu Çerezler (Gerekli)
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="w-4 h-4"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Analitik Çerezler
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="w-4 h-4"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Pazarlama Çerezleri
                </span>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-auto">
            <button
              onClick={acceptAll}
              className="bg-[#205B97] text-white px-6 py-2 rounded-full hover:bg-[#4CA0E8] transition-colors font-semibold"
            >
              Tümünü Kabul Et
            </button>
            <button
              onClick={savePreferences}
              className="bg-gray-200 text-[#0A2342] px-6 py-2 rounded-full hover:bg-gray-300 transition-colors font-semibold"
            >
              Tercihleri Kaydet
            </button>
            <button
              onClick={acceptNecessary}
              className="text-[#205B97] hover:text-[#4CA0E8] px-6 py-2 text-sm underline"
            >
              Sadece Gerekli Çerezler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
