"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { event as gaEvent } from "@/lib/gtag"; // ✅ المسار حسب مشروعك

const TypingDots = () => (
  <div className="flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-2xl w-fit">
    <span className="sr-only">يكتب...</span>
    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "-0.2s" }} />
    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.2s" }} />
  </div>
);

const ChatBubble = ({ children, side = "bot" }) => (
  <div className={`flex ${side === "user" ? "justify-start" : "justify-end"}`}>
    <div
      className={
        side === "user"
          ? "bg-white border border-gray-200 text-gray-800 rounded-2xl px-3 py-2 shadow-sm max-w-[85%]"
          : "bg-green-500 text-white rounded-2xl px-3 py-2 shadow-sm max-w-[85%]"
      }
    >
      {children}
    </div>
  </div>
);

// hook localStorage
const useLocalStorage = (key, initial) => {
  const [state, setState] = useState(() => {
    if (typeof window === "undefined") return initial;
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);
  return [state, setState];
};

// ✅ تتبّع موحّد يدعم Beacon
const track = (action, params = {}) => {
  gaEvent(action, {
    transport_type: "beacon",
    ...params,
  });
};
if (typeof window !== "undefined") window.__waTrack = track;

export default function SmartWhatsAppChat({
  phone = 962781607560, // رقم دولي بدون + أو 00
  brand = "فريق الدعم",
  avatar = "/LOGO.jpg",
  defaultMessage = "",
  quickReplies = [
    "بدي أعرف أسعار أنواع الآبار",
    "عندي مشروع، كيف أتتبّع حالته؟",
    "ما هي المشاريع الاخرى لديكم؟",
    "كم مدة تنفيذ البئر ؟",
    "اريد بدء معكم مشروع جديد.ما المطلوب مني الان؟",
  ],
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [msg, setMsg] = useLocalStorage("wh-msg", "");
  const bodyRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    setIsTyping(true);
    const t = setTimeout(() => setIsTyping(false), 900);
    const tf = setTimeout(() => textareaRef.current?.focus(), 50);
    return () => {
      clearTimeout(t);
      clearTimeout(tf);
    };
  }, [isOpen]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [isOpen, msg, isTyping]);

  const openWhatsApp = (custom) => {
    if (!phone) {
      console.warn("SmartWhatsAppChat: يرجى تمرير خاصية phone.");
      return;
    }

    // ✅ ألصق وسم مصدر داخل نص الرسالة (بدل UTM على wa.me)
    const sourceTag = "\n— via: website-chat";
    const rawUser = (custom ?? msg) || defaultMessage || "";
    const raw = (rawUser + sourceTag).trim();
    const text = encodeURIComponent(raw);

    const waWeb = `https://wa.me/${phone}?text=${text}`; // لا نضيف UTM هنا
    const waDeep = `whatsapp://send?phone=${phone}&text=${text}`;

    const isMobile =
      typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // ✅ حدث تتبّع غني بالمعلمات
    track("whatsapp_redirect", {
      page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
      message_length: raw.length,
      message_preview: raw.substring(0, 100),
      device: isMobile ? "mobile" : "desktop",
      quick_reply_used:
        Boolean(rawUser) && quickReplies.some((q) => rawUser.includes(q)),
    });

    if (isMobile) {
      // مهلة صغيرة لمنح الـBeacon فرصة الإرسال
      setTimeout(() => {
        // جرّب التطبيق أولاً ثم افتح الويب كاحتياط
        window.location.href = waDeep;
        setTimeout(() => window.open(waWeb, "_blank", "noopener,noreferrer"), 350);
      }, 150);
    } else {
      window.open(waWeb, "_blank", "noopener,noreferrer");
    }
  };

  const header = (
    <div className="flex items-center gap-3 p-3 border-b border-gray-100">
      <div className="relative">
        <img src={avatar} alt={brand} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 ring-2 ring-white" />
      </div>
      <div className="min-w-0">
        <div className="font-semibold text-gray-800 truncate">{brand}</div>
        <div className="text-xs text-gray-500">متصل الآن • عادةً نرد خلال دقائق</div>
      </div>
      <div className="ml-auto">
        <button
          type="button"
          onClick={() => {
            track("floating_button_close");
            setIsOpen(false);
          }}
          className="text-gray-500 hover:text-gray-700 px-2 py-1 rounded"
        >
          ×
        </button>
      </div>
    </div>
  );

  const footer = (
    <div className="p-3 border-t border-gray-100 bg-white">
      <div className="flex items-end gap-2">
        <textarea
          ref={textareaRef}
          dir="auto"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              track("question_form_submit", {
                message_length: (msg || "").trim().length,
                trigger: "enter",
              });
              openWhatsApp();
            }
          }}
          rows={1}
          placeholder="اكتب رسالتك هنا..."
          className="flex-1 resize-none rounded-2xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none px-3 py-2 text-gray-800 max-h-32"
        />
        <button
          type="button"
          onClick={() => {
            track("question_form_submit", {
              message_length: (msg || "").trim().length,
              trigger: "button",
            });
            openWhatsApp();
          }}
          className="shrink-0 bg-green-500 hover:bg-green-600 text-white rounded-2xl px-4 py-2 font-semibold shadow"
        >
          إرسال
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {quickReplies.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => {
              track("quick_reply_click", { text: q });
              setMsg((m) => (m ? `${m}\n${q}` : q));
            }}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-3 py-1"
          >
            {q}
          </button>
        ))}
      </div>
      <p className="text-[10px] text-gray-400 mt-2">بالضغط على إرسال سيتم فتح واتساب ومتابعة المحادثة هناك.</p>
    </div>
  );

  return (
    <div dir="rtl" lang="ar">
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="fab"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            type="button"
            onClick={() => {
              track("floating_button_open", { source: "fab" });
              setIsOpen(true);
            }}
            aria-label="افتح الدردشة"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-5 py-3 shadow-xl text-base"
            style={{ boxShadow: "0 8px 28px rgba(37,211,102,.28)" }}
          >
            <svg viewBox="0 0 22 22" width="20" height="20" aria-hidden="true">
              <path d="m.76 21.24 1.412-5.12A10.324 10.324 0 0 1 .76 10.93C.76 5.35 5.35.76 10.964.76 16.58.76 21.24 5.35 21.24 10.93c0 5.578-4.661 10.31-10.276 10.31-1.765 0-3.46-.565-4.978-1.413L.76 21.24Z" fill="#EDEDED" />
              <path d="m6.268 17.991.318.177c1.307.812 2.825 1.306 4.414 1.306 4.626 0 8.474-3.848 8.474-8.545 0-4.696-3.848-8.404-8.51-8.404-4.66 0-8.439 3.743-8.439 8.404 0 1.624.46 3.213 1.307 4.555l.212.318-.812 2.966 3.036-.777Z" fill="#25D366" />
              <path d="m8.245 6.198-.671-.036a.802.802 0 0 0-.565.212c-.318.283-.848.812-.989 1.519-.247 1.059.141 2.33 1.06 3.601.918 1.271 2.683 3.32 5.79 4.202.989.283 1.766.106 2.402-.282.494-.318.812-.812.918-1.342l.105-.494a.355.355 0 0 0-.176-.389l-2.225-1.024a.337.337 0 0 0-.423.106l-.883 1.13a.275.275 0 0 1-.283.07c-.6-.211-2.613-1.059-3.707-3.177-.036-.106-.036-.212.035-.283l.848-.953c.07-.106.105-.247.07-.353L8.527 6.41a.308.308 0 0 0-.282-.212Z" fill="#FEFEFE" />
            </svg>
            تواصل معنا
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            role="dialog"
            aria-modal="true"
            aria-label="محادثة الدعم"
            className="fixed bottom-6 right-6 z-50 w-[min(92vw,380px)] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden"
            style={{ boxShadow: "0 24px 80px rgba(0,0,0,.16)" }}
          >
            {header}

            <div ref={bodyRef} className="max-h-[60vh] overflow-y-auto p-3 space-y-2 bg-gray-50">
              <ChatBubble side="user">مرحبا! حاب أتواصل مع {brand}.</ChatBubble>
              <ChatBubble>أهلا وسهلا 👋 كيف فيني أساعدك اليوم؟ اختر اختصار أو اكتب سؤالك.</ChatBubble>
              {isTyping && (
                <div className="flex justify-end">
                  <TypingDots />
                </div>
              )}
            </div>

            {footer}

            <div className="p-3 bg-white border-t border-gray-100">
              <button
                type="button"
                onClick={() => openWhatsApp()}
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-2.5 font-semibold shadow"
              >
                متابعة المحادثة على واتساب
              </button>
              <button
                type="button"
                onClick={() => {
                  track("floating_button_close");
                  setIsOpen(false);
                }}
                className="w-full mt-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl py-2 font-medium"
              >
                تصغير
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
