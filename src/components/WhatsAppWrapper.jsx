"use client";
import dynamic from "next/dynamic";

const SmartWhatsAppChat = dynamic(() => import("./SmartWhatsAppChat.jsx"), { ssr: false });

export default function WhatsAppWrapper() {
  return (
    <SmartWhatsAppChat
      phone={962781607560⁩⁩}
      brand="فريق الدعم"
      avatar="/LOGO.jpg"
      defaultMessage=""
      quickReplies={[
        "بدي أعرف أسعار أنواع الآبار",
        "عندي مشروع، كيف أتتبّع حالته؟",
        "ما هي المشاريع الاخرى لديكم؟",
        "كم مدة تنفيذ البئر ؟",
        "اريد بدء معكم مشروع جديد.ما المطلوب مني الان؟",
      ]}
    />
  );
}
