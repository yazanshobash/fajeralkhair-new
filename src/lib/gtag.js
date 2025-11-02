export const GA_MEASUREMENT_ID = "G-4DE50EK29H"; // غيّرها عند الحاجة

// تتبع مشاهدة صفحة
export const pageview = (url) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
};

// تتبع حدث مخصص
export const event = (action, params = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
  try {
    window.dataLayer && window.dataLayer.push({ event: action, ...params });
  } catch {}
};
