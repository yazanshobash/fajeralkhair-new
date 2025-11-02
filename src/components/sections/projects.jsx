'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";

/* نحفظ تفضيل العملة في المتصفح */
const STORAGE_KEY = 'currency_preference';

/* بيانات المشاريع (الآبار) — ضع روابطك AED / USD */
const projectsData = [
  {
    title: "بئر سطحي",
    description: ["بمضخة يدوية","مدة الاستخدام 15 سنة","العمق 12-15 متر","ينتفع به من 4 لـ 5 عائلات يومياً على الأقل"],
    image: "/birst_8_11zon.webp",
    priceAED: 900, priceUSD: 240,
    modelGlb: "/model/birst.glb",
    orderUrlAED: "", 
    orderUrlUSD: ""  
  },
  {
    title: "بئر كهربي",
    description: ["بمضخة كهربائية+مضخة يدوية +حنفيتين","مدة الاستخدام 20 سنة","العمق 15-20 متر","ينتفع به من 6 لـ 10 عائلات يومياً على الأقل"],
    image: "/birka_7_11zon.webp",
    priceAED: 1450, priceUSD: 390,
    modelGlb: "/model/birka.glb",
    orderUrlAED: "",
    orderUrlUSD: ""
  },
  {
    title: "بئر كهربي (سيراميك)",
    description: ["بمضخة كهربائية+مضخة يدوية +حنفيتين","مدة الاستخدام 20 سنة","العمق 15-20 متر","ينتفع به من 6 لـ 10 عائلات يومياً على الأقل"],
    image: "/birkasr.webp",
    priceAED: 1660, priceUSD: 450,
    modelGlb: "/model/birkasr.glb",
    orderUrlAED: "",
    orderUrlUSD: ""
  },
  {
    title: "بئر ارتوازي",
    description: ["بمضخة كهربائية+مضخة يدوية+3حنفيات+خزان","مدة الاستدامة 30 سنة","العمق 25-30 متر","ينتفع به من 150 لـ 200 شخص يوميا"],
    image: "/birirt_6_11zon.webp",
    priceAED: 1850, priceUSD: 500,
    modelGlb: "/model/birir.glb",
    orderUrlAED: "",
    orderUrlUSD: ""
  },
  {
    title: "بئر ارتوازي (سيراميك)",
    description: ["بمضخة كهربائية+مضخة يدوية+6حنفيات+خزان","مدة الاستدامة مدى الحياة بإذن الله","العمق 35-40 متر","ينتفع به سكان القرية بالكامل"],
    image: "/sarmek_10_11zon.webp",
    priceAED: 3130, priceUSD: 850,
    modelGlb: "/model/seramek.glb",
    orderUrlAED: "",
    orderUrlUSD: ""
  },
  {
    title: "بئر ارتوازي مع متوضأ (سيراميك)",
    description: ["يأتي مع مضخة كهربائية، خزان، 11 مقعد و11 حنفية","مدة الاستدامة مدى الحياة بإذن الله","حفر الي عمق 50-55 متر","يوضع بجانب مسجد أو على باب قرية"],
    image: "/motwada_9_11zon.webp",
    priceAED: 6260, priceUSD: 1700,
    modelGlb: "/model/motwada.glb",
    orderUrlAED: "",
    orderUrlUSD: ""
  },
];

/* الأضاحي والعقائق  AED / USD */
const sacrifices = [
  {
    title: "عجل (بقرة)",
    image: "/model/caw.webp",
    description: ["ابقار تذبح وتوزع","تبدأ الاوزان من 80 كيلو","لحم صافي بعد السلخ والتقطيع"],
    priceAED: 1850, priceUSD: 500,
    orderUrlAED: "",
    orderUrlUSD: ""
  },
  {
    title: "خروف",
    image: "/model/sheep.webp",
    description: ["خواريف تذبح وتوزع في العيد","توزع على المحتاجين حسب المنطقة","لحم صافي من 10-15 كيلو"],
    priceAED: 735, priceUSD: 200,
    orderUrlAED: "",
    orderUrlUSD: ""
  }
];

/* المصاحف — جهّز روابط لكل عملة */
const mushafOptions = [
  {
    count: 25,
    imgSrc: "/model/25quran.webp",
    priceAED: 500, priceUSD: 100,
    orderUrlAED: "",
    orderUrlUSD: ""
  },
  {
    count: 50,
    imgSrc: "/model/50quran.webp",
    priceAED: 1000, priceUSD: 250,
    orderUrlAED: "",
    orderUrlUSD: ""
  }
];

export default function ProjectsSection() {
  const [currency, setCurrency] = useState("USD");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalModel, setModalModel] = useState("");
  const [showHint, setShowHint] = useState(true);

  /* تحميل model-viewer مرة واحدة */
  useEffect(() => {
    if (!window.customElements?.get('model-viewer')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
      document.head.appendChild(script);
    }
  }, []);

  /* استعادة العملة المحفوظة ثم حفظ أي تغيير */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "USD" || saved === "AED") setCurrency(saved);
    } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, currency); } catch {}
  }, [currency]);

  /* إخفاء فقاعة التلميح */
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 6000);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => { setShowHint(false); }, [currency]);

  const openModal = (modelGlb) => { setModalModel(modelGlb); setModalOpen(true); };
  const closeModal = () => setModalOpen(false);

  /* زر الشراء (ستايل) */
  const cardButtonStyle = {
    background: "linear-gradient(135deg, #B65B1B 0%, #9d4c17 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "14px 24px",
    fontSize: "16px",
    cursor: "pointer",
    width: "100%",
    margin: "16px 0 0 0",
    fontWeight: "700",
    letterSpacing: "0.5px",
    boxShadow: "0 4px 20px rgba(182, 91, 27, 0.3)",
    transition: "all 0.3s ease",
    outline: "none",
    position: "relative",
    zIndex: 10,
    textAlign: "center",
    minHeight: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    WebkitTapHighlightColor: "transparent",
    pointerEvents: "auto"
  };

  const viewModelButtonStyle = {
    background: "linear-gradient(135deg, #B65B1B 0%, #9d4c17 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0 2px 10px rgba(182, 91, 27, 0.3)",
    transition: "all 0.3s ease",
    outline: "none",
    marginBottom: "16px"
  };

  /* فتح الرابط (حل Safari) — false = نفس الصفحة */
  const go = (e, url, inNewTab = false) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    try {
      if (inNewTab) {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        window.location.assign(url);
      }
    } catch {}
    return false;
  };

  /* مبدّل أزرار العملة */
  const pill = (active) => ({
    border: active ? "1px solid transparent" : "1px solid #eee",
    background: active ? "linear-gradient(135deg, #B65B1B 0%, #9d4c17 100%)" : "#fff",
    color: active ? "#fff" : "#6d3b13",
    borderRadius: 9999,
    padding: "8px 14px",
    cursor: "pointer",
    fontWeight: 800,
    minWidth: 96,
    transition: "all .2s ease"
  });

  /* ارجع رابط الشراء الصحيح حسب العملة مع دعم fallback */
  const getOrderUrl = (item) => {
    if (currency === "AED") {
      return item.orderUrlAED || item.orderUrl || item.orderUrlUSD || "#";
    }
    return item.orderUrlUSD || item.orderUrl || item.orderUrlAED || "#";
  };

  return (
    <>
      {/* المشاريع (الآبار) */}
      <section style={{ background: "#fff", padding: "40px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <h2 style={{ color: "#a05a13", fontWeight: 700, fontSize: 40, marginBottom: 12 }}>الابار</h2>

          {/* مُحوِّل العملة */}
          <div
            dir="rtl"
            className={`currency-switcher ${showHint ? 'pulse-cta' : ''}`}
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "#fcf8f3",
              padding: "8px 12px",
              borderRadius: 9999,
              boxShadow: "0 8px 28px rgba(182, 91, 27, 0.18)",
              border: "1px solid #eee"
            }}
            aria-label="تغيير العملة"
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#a05a13", fontWeight: 800 }}>
              <span aria-hidden>💱</span>
              <span>تغيير العملة</span>
            </span>

            <div role="group" aria-label="اختيار العملة" style={{
              display: "inline-flex",
              background: "#fff",
              borderRadius: 9999,
              padding: 4,
              border: "1px solid #eee"
            }}>
              <button type="button" onClick={() => setCurrency("AED")} aria-pressed={currency === "AED"} style={pill(currency === "AED")}>
                د.إ AED
              </button>
              <button type="button" onClick={() => setCurrency("USD")} aria-pressed={currency === "USD"} style={pill(currency === "USD")}>
                $ USD
              </button>
            </div>

            {showHint && (
              <div className="hint-bubble" style={{
                position: "absolute",
                top: -42,
                right: 12,
                background: "#fff",
                color: "#6d3b13",
                border: "1px solid #f0e6de",
                padding: "6px 10px",
                borderRadius: 10,
                fontWeight: 800,
                fontSize: 14,
                boxShadow: "0 6px 20px rgba(0,0,0,.08)",
                whiteSpace: "nowrap",
                pointerEvents: "none"
              }}>
                اضغط هنا لتغيير العملة
                <span style={{
                  position: "absolute",
                  bottom: -6,
                  right: 16,
                  width: 0, height: 0,
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderTop: "6px solid #fff",
                  filter: "drop-shadow(0 -1px 0 #f0e6de)"
                }} />
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            justifyContent: "center",
            alignItems: "stretch",
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto"
          }}
        >
          {projectsData.map((proj, idx) => {
            const link = getOrderUrl(proj);
            return (
              <div key={idx} style={{
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 2px 12px #0001",
                width: 340,
                minHeight: 540,
                padding: 24,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <div style={{ width: "100%" }}>
                  <img src={proj.image} alt={proj.title} style={{ width: "100%", height: 200, objectFit: "contain", marginBottom: 16 }} />
                  <button style={viewModelButtonStyle} onClick={() => openModal(proj.modelGlb)}>
                    عرض النموذج
                  </button>
                  <h3 style={{ color: "#e67c1c", fontWeight: 700, fontSize: 28, minHeight: 40, margin: 0 }}>{proj.title}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0 0", color: "#444", fontSize: 18, textAlign: "right", minHeight: 110, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    {proj.description.map((line, i) => (<li key={i}>{line}</li>))}
                  </ul>
                </div>

                <div style={{ width: "100%" }}>
                  <div style={{ color: "#555", fontWeight: 700, fontSize: 22, margin: "16px 0 12px 0" }}>
                    التكلفة: {currency === "AED" ? `${proj.priceAED} درهم إماراتي` : `$${proj.priceUSD} دولار`}
                  </div>

                  <a
                    href={link}
                    role="link"
                    aria-label={`اطلب الآن: ${proj.title}`}
                    onClick={(e) => go(e, link, false)}
                    style={cardButtonStyle}
                  >
                    اطلب الآن
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* مودال 3D */}
        {modalOpen && (
          <div style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#0008", zIndex: 1000,
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <div style={{ background: "#fff", borderRadius: 16, padding: 24, minWidth: "60vw", minHeight: "60vh", width: "90vw", height: "90vh", position: "relative", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <button onClick={closeModal} style={{ position: "absolute", top: 12, left: 12, background: "#e67c1c", color: "#fff", border: 0, borderRadius: "50%", width: 32, height: 32, fontSize: 20, cursor: "pointer", zIndex: 2 }}>×</button>
              <model-viewer
                src={modalModel}
                alt="نموذج ثلاثي الأبعاد"
                auto-rotate
                camera-controls
                ar
                style={{ width: "80vw", height: "80vh", maxWidth: "100%", maxHeight: "100%" }}
                loading="eager"
                ar-status="not-presenting"
              ></model-viewer>
            </div>
          </div>
        )}
      </section>

      {/* الأضاحي والعقائق */}
      <section style={{ background: "#fff", padding: "40px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ color: "#6d3b13", fontWeight: 700, fontSize: 48, marginBottom: 8 }}>الأضاحي والعقائق</h2>
          <div style={{ margin: "0 auto 32px auto", width: 48 }}>
            <Image src="/model/shap-logo.png" width={48} height={48} alt="زخرفة" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {sacrifices.map((item, idx) => {
            const link = getOrderUrl(item);
            return (
              <div key={idx} style={{
                background: "#fcf8f3",
                borderRadius: 24,
                boxShadow: "0 2px 12px #0001",
                width: 400,
                padding: 32,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}>
                <Image src={item.image} width={300} height={220} alt={item.title} style={{ objectFit: "contain", marginBottom: 16 }} />
                <h3 style={{ color: "#a05a13", fontWeight: 700, fontSize: 36, margin: 0 }}>{item.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0 0", color: "#444", fontSize: 20, textAlign: "center" }}>
                  {item.description.map((line, i) => (<li key={i}>{line}</li>))}
                </ul>
                <div className="mt-3" style={{ color: "#555", fontWeight: 700, fontSize: 22, margin: "16px 0 0 0" }}>
                  التكلفة: {currency === "AED" ? `${item.priceAED} درهم إماراتي` : `$${item.priceUSD} دولار`}
                </div>

                <a
                  href={link}
                  role="link"
                  aria-label={`اطلب الآن: ${item.title}`}
                  onClick={(e) => go(e, link, false)}
                  style={cardButtonStyle}
                >
                  اطلب الآن
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* توزيع المصاحف */}
      <section style={{ background: "#fff", padding: "40px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ color: "#6d3b13", fontWeight: 700, fontSize: 48, marginBottom: 8 }}>توزيع المصاحف</h2>
          <div style={{ margin: "0 auto 32px auto", width: 48 }}>
            <Image src="/model/shap-logo.png" width={48} height={48} alt="زخرفة" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {mushafOptions.map((opt) => {
            const link = getOrderUrl(opt);
            return (
              <div key={opt.count} style={{
                background: "#fcf8f3",
                borderRadius: 24,
                boxShadow: "0 2px 12px #0001",
                width: 400,
                padding: 32,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}>
                <div style={{ position: "relative", width: "100%", height: 260, marginBottom: 16, background: "#f7f3ec", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src={opt.imgSrc} width={300} height={360} alt="مصحف" style={{ zIndex: 2, marginBottom: 16 }} />
                  <div style={{ position: "absolute", top: 16, left: 32, color: "#e67c1c", fontWeight: 700, fontSize: 48 }}>{opt.count}</div>
                  <div style={{ position: "absolute", top: 16, right: 32, color: "#a05a13", fontWeight: 700, fontSize: 32 }}>مصحف</div>
                </div>
                <h3 style={{ color: "#e67c1c", fontWeight: 700, fontSize: 28, margin: "0 0 12px 0" }}>توزيع {opt.count} مصحف</h3>
                <div style={{ color: "#444", fontSize: 18, margin: 0 }}>
                  قال رسول الله ﷺ "خيركم من تعلم القرآن وعلمه" ومن هذا المنطلق نسعى إلى طباعة المصحف الشريف، وتوزيعه، في المدارس والمساجد ودور تحفيظ القرأن
                </div>
                <div style={{ color: "#555", fontWeight: 700, fontSize: 22, margin: "20px 0 0 0" }}>
                  التكلفة: {currency === "AED" ? `${opt.priceAED} درهم إماراتي` : `${opt.priceUSD}$ دولار`}
                </div>

                <a
                  href={link}
                  role="link"
                  aria-label={`اطلب الآن: توزيع ${opt.count} مصحف`}
                  onClick={(e) => go(e, link, false)}
                  style={cardButtonStyle}
                >
                  اطلب الآن
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* السلال الغذائية */}
      <section style={{ background: "#fff", padding: "40px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ color: "#6d3b13", fontWeight: 700, fontSize: 48, marginBottom: 8 }}>السلال الغذائية</h2>
          <div style={{ margin: "0 auto 32px auto", width: 48 }}>
            <Image src="/model/shap-logo.png" width={48} height={48} alt="زخرفة" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap", width: "100%", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ background: "#fcf8f3", borderRadius: 24, boxShadow: "0 2px 12px #0001", width: 400, maxWidth: "95vw", padding: 32, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", margin: "0 auto" }}>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Image src="/rate/food.webp" width={340} height={260} alt="سلة غذائية" style={{ objectFit: "contain", borderRadius: 16, marginBottom: 16, width: "100%", maxWidth: 340 }} />
            </div>
            <h3 style={{ color: "#e67c1c", fontWeight: 700, fontSize: 28, margin: "24px 0 12px 0" }}>سلة غذائية لـ6 أفراد</h3>
            <div style={{ color: "#444", fontSize: 18, margin: 0 }}>
              السلة الغذائية تكفي العائلة لمدة شهر تحتوي على العديد من الأصناف الغذائية والضرورية للعائلة
            </div>
            <div style={{ color: "#555", fontWeight: 700, fontSize: 22, margin: "20px 0 0 0" }}>
              التكلفة: {currency === "AED" ? `300 درهم إماراتي` : `75$ دولار`}
            </div>

            {(() => {
              const foodItem = {
                orderUrlAED: "",
                orderUrlUSD: ""
              };
              const link = getOrderUrl(foodItem);
              return (
                <a
                  href={link}
                  role="link"
                  aria-label="اطلب الآن: سلة غذائية"
                  onClick={(e) => go(e, link, false)}
                  style={cardButtonStyle}
                >
                  اطلب الآن
                </a>
              );
            })()}
          </div>
        </div>

        {/* أنماط الحركة والاستجابة */}
        <style>{`
          .pulse-cta { animation: pulseScale 1.4s ease-in-out 0s 3; }
          @keyframes pulseScale {
            0%   { transform: translateY(0) scale(1);   box-shadow: 0 0 0 rgba(182,91,27,0); }
            50%  { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 28px rgba(182,91,27,.25); }
            100% { transform: translateY(0) scale(1);   box-shadow: 0 0 0 rgba(182,91,27,0); }
          }
          a[style] { text-decoration: none; }
          a[style]:hover {
            background: linear-gradient(135deg, #9d4c17 0%, #8a4215 100%) !important;
            box-shadow: 0 6px 25px rgba(182, 91, 27, 0.4) !important;
            transform: translateY(-2px) !important;
          }
          a[style]:active {
            transform: translateY(0px) scale(0.98) !important;
            box-shadow: 0 2px 10px rgba(182, 91, 27, 0.3) !important;
          }
          @media (max-width: 900px) {
            section > div[style*='display: flex'], section > div[style*='display: grid'] {
              gap: 18px !important;
              flex-direction: column !important;
              align-items: center !important;
              grid-template-columns: 1fr !important;
              overflow: hidden !important;
            }
            section > div[style*='display: flex'] > div, section > div[style*='display: grid'] > div {
              width: 98vw !important; max-width: 99vw !important; min-width: unset !important;
              padding: 12px !important; overflow: hidden !important;
              display: flex !important; flex-direction: column !important; align-items: center !important;
            }
          }
          @media (max-width: 600px) {
            section > div[style*='grid-template-columns'] { grid-template-columns: 1fr !important; gap: 16px !important; }
            section > div[style*='grid-template-columns'] > div {
              width: 98vw !important; max-width: 99vw !important; min-width: unset !important;
              margin: 0 auto 12px auto !important; padding: 10px 4px 14px 4px !important;
              border-radius: 18px !important; box-shadow: 0 2px 12px #0001 !important; text-align: center !important;
              display: block !important; overflow: hidden !important;
            }
            h2 { font-size: 20px !important; }
            h3 { font-size: 16px !important; }
            ul, div, p { font-size: 15px !important; }
            img, .next-image, .next-image img {
              max-width: 90vw !important; height: auto !important; margin: 0 auto 10px auto !important; display: block !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
