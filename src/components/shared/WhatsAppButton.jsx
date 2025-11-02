"use client";
import dynamic from "next/dynamic";

// استدعِ المكوّن الجديد SmartWhatsAppChat (بدون SSR)
const SmartWhatsAppChat = dynamic(() => import("../SmartWhatsAppChat.jsx"), {
  ssr: false,
});

// أعِد تصديره تحت نفس الاسم القديم (WhatsAppButton)
export default function WhatsAppButton(props) {
  return <SmartWhatsAppChat {...props} />;
}
