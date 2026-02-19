import type { Translations } from "./en";

export const tr: Translations = {
  site: {
    title: "LoveClick",
    subtitle: "UI/UX Tasarım Kılavuzu",
    tagline: "Partner Görsel Oluşturma ve Paylaşım Platformu",
  },
  nav: {
    overview: "Genel Bakış",
    workflows: "Kullanıcı Akışları",
    pages: "Sayfa Detayları",
    technical: "Teknik Gereksinimler",
    notes: "Tasarımcıya Notlar",
  },
  lang: {
    toggle: "EN",
    current: "TR",
  },

  // ─── Section 1: Overview ──────────────────────────────────────────────────
  overview: {
    title: "Proje Genel Bakışı",
    subtitle: "Vizyon ve Tasarım Dili",
    vision: {
      label: "Vizyon",
      text: "LoveClick, çiftlerin ortak anılarını görsel bir hikaye anlatıcılığına dönüştürür — AI destekli temalarla zenginleştirilmiş ve Instagram Reels benzeri bir akışla sunulur. Hedef; samimi, sıcak ve canlı hissettirmek.",
    },
    pillars: {
      label: "Platform Yapı Taşları",
      items: [
        "Partner Görsel Oluşturma ve Paylaşımı",
        "AI destekli anı temaları",
        "Instagram Reels / Shorts benzeri akış",
        "Hedef kitle: Çiftler ve anı biriktirmeyi sevenler",
      ],
    },
    designLanguage: {
      label: "Tasarım Dili",
      tone: "Soft Cloud · Pastel Pembe · Modern · Minimalist · Duygusal",
      font: {
        label: "Tipografi",
        value: "Yuvarlak sans-serif — sıcak, yumuşak, okunabilir",
        sample: "Aa Bb Cc — Romantizm ve Anılar",
      },
    },
    palette: {
      label: "Renk Paleti",
      swatches: [
        { name: "Pudra Sayfa", hex: "#FFF5F7", usage: "Sayfa arka planı" },
        { name: "Bulut Pembe", hex: "#FCE4EC", usage: "Ana marka / kartlar" },
        { name: "Yumuşak Gül", hex: "#F8BBD9", usage: "Vurgular, kenarlıklar" },
        { name: "Taç Yaprak", hex: "#F48FB1", usage: "İkonlar, öne çıkanlar" },
        { name: "Çiçek", hex: "#F06292", usage: "Aktif durumlar, CTA'lar" },
        { name: "Fildişi Beyaz", hex: "#FFFFFF", usage: "Kart arka planları" },
        { name: "Sis Grisi", hex: "#F5F5F5", usage: "İkincil yüzeyler" },
      ],
    },
  },

  // ─── Section 2: Workflows ────────────────────────────────────────────────
  workflows: {
    title: "Kullanıcı Akışları",
    subtitle: "Adım adım etkileşim akışları",
    sections: [
      {
        id: "story-creation",
        label: "Akış A",
        title: "Hikaye Oluşturma Akışı",
        steps: [
          {
            number: 1,
            title: "Görsel Seçimi",
            description:
              "Kullanıcı cihaz galerisinden birden fazla görsel seçer. Görsel seçim sayacı ile çoklu seçim desteği.",
          },
          {
            number: 2,
            title: "Editör Ekranı",
            description:
              "Her görsel için ayrı bir metin alanı açılır. Kullanıcı o görsele ait anısını yazar.",
          },
          {
            number: 3,
            title: "Kaydetme",
            description:
              "Görseller ve metinler eşleştirilerek veri tabanına kaydedilir. İlerleme otomatik kaydedilir.",
          },
          {
            number: 4,
            title: "Yayınlama",
            description:
              '"Hikaye Oluştur" butonuna basıldığında hikaye akışta görünür hale gelir.',
          },
        ],
      },
      {
        id: "memory-feed",
        label: "Akış B",
        title: "Anı Akışı — \"Reels Tarzı\"",
        steps: [
          {
            number: 1,
            title: "Giriş",
            description:
              'Kullanıcı "Hikayeyi İzle" butonuna dokunur ve tam ekran dikey akış yumuşak bir fade-in geçişiyle başlar.',
          },
          {
            number: 2,
            title: "Navigasyon",
            description:
              "Yukarı kaydırarak bir sonraki görsel/metin kombinasyonuna geçilir. Aşağı kaydırarak geri dönülür.",
          },
          {
            number: 3,
            title: "Sağ Taraf Etkileşimleri",
            description:
              "Sağ kenarda üst üste: Kalp (Beğeni) ve Kaydet ikonları — Reels/Shorts düzeniyle aynı.",
          },
          {
            number: 4,
            title: "Profil İkonları",
            description:
              "Sol alt köşe: iki yuvarlak profil ikonu (Kullanıcı + Partner). Üzerlerinde sürekli yüzen bir kalp animasyonu bulunur.",
          },
          {
            number: 5,
            title: "Kalp Dokunma Animasyonu",
            description:
              "Profil ikonlarından birine dokunulduğunda ekran genelinde kalp animasyonları patlar.",
          },
        ],
      },
      {
        id: "ai-transform",
        label: "Akış C",
        title: "AI Görsel Dönüştürme",
        steps: [
          {
            number: 1,
            title: "Yükleme",
            description:
              "Kullanıcı galeri veya sürükle-bırak yöntemiyle kişisel fotoğraf yükler.",
          },
          {
            number: 2,
            title: "Tema Seçimi",
            description:
              "Küçük resimli yatay kaydırılabilir tema seçici (örn. Cyberpunk, Yağlı Boya, Retro, Suluboya).",
          },
          {
            number: 3,
            title: "Üretim",
            description:
              '"Tasarla" butonu AI işlemini başlatır. İşlem sırasında özel bir yükleme animasyonu oynatılır.',
          },
          {
            number: 4,
            title: "Sonuç",
            description:
              "Dönüştürülen görsel tam ekran görüntülenir. Kullanıcı indirebilir veya doğrudan hikayesine ekleyebilir.",
          },
        ],
      },
    ],
  },

  // ─── Section 3: Page Details ─────────────────────────────────────────────
  pages: {
    title: "Sayfa Detayları",
    subtitle: "Ekran başına bileşen dökümü",
    cards: [
      {
        tag: "Sayfa 1",
        title: "Ana Sayfa (Feed)",
        description:
          "Ana ekran. Üstte hikayeler, ortada hızlı erişim butonları, altta sekme çubuğu.",
        components: [
          {
            label: "Hikayeler Satırı (Üst)",
            detail:
              "Dikey/oval dikdörtgen kartlar — klasik Instagram daire formatı KULLANILMAYACAK. Kartlarda kapak görseli ve çift isimleri gösterilir.",
          },
          {
            label: "Hızlı Erişim Butonları (Orta)",
            detail:
              'İki belirgin buton: "Yeni Hikaye" ve "AI Tasarım Merkezi". Büyük, dokunulabilir, görsel olarak ayrışık.',
          },
          {
            label: "Sekme Çubuğu (Alt)",
            detail:
              "4 sekme: Ana Sayfa, AI Oluşturucu, Bildirimler, Ayarlar. iOS/Android standart sekme çubuğu kurallarını takip eder.",
          },
        ],
      },
      {
        tag: "Sayfa 2",
        title: "AI Tasarım Sayfası",
        description:
          "AI fotoğraf dönüştürme için özel ekran. Temiz, minimal, oluşturma eylemine odaklı.",
        components: [
          {
            label: "Yükleme Alanı",
            detail:
              "Büyük merkezi alan — sürükle-bırak ve galeri butonu desteği. Görsel seçilince ön izleme gösterilir.",
          },
          {
            label: "Tema Seçici",
            detail:
              "Yatay kaydırılabilir küçük resim satırı, altında tema adları. Seçili tema pembe bir vurgu halkasıyla gösterilir.",
          },
          {
            label: '"Tasarla" Butonu',
            detail:
              "Tam genişlik, büyük, belirgin CTA butonu. Görsel/tema seçilmediğinde devre dışı durumu. Aktifken yükleme animasyonu gösterilir.",
          },
        ],
      },
      {
        tag: "Sayfa 3",
        title: "Ayarlar",
        description:
          "Üç gruba ayrılır: Profil Yönetimi, Sistem Seçenekleri ve Destek.",
        components: [
          {
            label: "Profil Yönetimi",
            detail:
              "İki sekme: Kullanıcı ve Partner. Her sekme; isim, fotoğraf ve görüntü bilgilerini güncellemeye izin verir.",
          },
          {
            label: "Sistem Seçenekleri",
            detail: "Uygulama Dili seçici, Versiyon Bilgisi gösterimi.",
          },
          {
            label: "Destek Bölümü",
            detail:
              "Hakkımızda, Destek/İletişim, S.S.S. (genişletilebilir akordeon).",
          },
        ],
      },
    ],
  },

  // ─── Section 4: Technical Requirements ───────────────────────────────────
  technical: {
    title: "Teknik ve Görsel Gereksinimler",
    subtitle: "Tasarımcının uyması gereken özellikler",
    animations: {
      label: "Zorunlu Animasyonlar",
      items: [
        {
          name: "Fade-In Geçişler",
          description:
            "Tüm sayfa geçişlerinde yumuşak fade-in kullanılmalı. Slide veya snap geçişler kullanılmamalı.",
          type: "fade",
        },
        {
          name: "Yüzen Kalp",
          description:
            "Akıştaki profil ikonlarının üzerinde sürekli yüzen kalp animasyonu. Yukarı yüzme + opaklık döngüsü animasyonu kullanılır.",
          type: "float",
        },
        {
          name: "AI Yükleme Animasyonu",
          description:
            "AI işlemi sırasında özel yükleme durumu. Mekanik değil organik hissettirmeli. Yumuşak nabız atan kalp veya dönen çiçek düşünülebilir.",
          type: "loading",
        },
      ],
    },
    typography: {
      label: "Tipografi",
      rules: [
        "Yuvarlak sans-serif font kullanılacak (örn. Nunito, Poppins veya benzeri)",
        "Yüksek okunabilirlik — mobilde minimum 16sp gövde metni",
        "Başlıklar: 700–800 kalınlık",
        "Gövde: 400–500 kalınlık",
        "Küçük etiketler dışında büyük harf kullanımından kaçınılacak",
      ],
    },
    spacing: {
      label: "Düzen ve Boşluklar",
      rules: [
        "Mobile-first tasarım. Ana tuval: 390 × 844px (iPhone 14 Pro)",
        "Kart köşe yarıçapı: 20–24px",
        "Ekran kenarlarından tutarlı 16px yatay dolgu",
        "Sekme çubuğu yüksekliği: 82px (güvenli alan dahil)",
        "Dokunma hedefleri: minimum 44 × 44px",
      ],
    },
  },

  // ─── Section 5: Designer Notes ────────────────────────────────────────────
  notes: {
    title: "Tasarımcıya Notlar",
    subtitle: "LoveClick'in ruhu",
    quote:
      "Uygulamanın ana duygusu 'romantizm ve dijital günlük' olmalı. Instagram'ın alışılmış yapısını bozmadan, dikey hikaye listelemesi ve profil ikonlarındaki özel etkileşimlerle fark yaratmak istiyoruz. Kullanıcı görseli izlerken kendini bir video akışında değil, canlanan bir fotoğraf albümünde hissetmeli.",
    principles: [
      {
        title: "Romantizm ve Dijital Günlük",
        description:
          "Her ekran samimi hissettirmeli. Sıcak renkler, yumuşak gölgeler, nazik geçişler. Soğuk veya klinik hiçbir şey olmamalı.",
      },
      {
        title: "Tanıdık ama Farklı",
        description:
          "Kullanıcılar Instagram'ı zaten biliyor. Onun kalıplarını bilinçli bir şekilde ödünç alın — ancak dikey oval hikaye kartları ve yüzen kalp etkileşimleri, LoveClick'i kendine özgü kılmalı.",
      },
      {
        title: "Canlı Fotoğraf Albümü",
        description:
          "Akış bir video oynatıcı DEĞİL. Canlandırılmış bir anı kitabıdır. Buna göre tasarlayın: yavaş geçişler, okunabilir metin katmanları, bir düşünme ve hatırlama hissi.",
      },
    ],
  },
};
