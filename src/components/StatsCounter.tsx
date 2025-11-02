"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";


/** عنصر واحد */
export type StatItem = {
  label: string;        // النص أسفل الرقم (مثلاً: "عدد المستفيدين")
  value: number;        // الرقم النهائي (مثلاً: 15000)
  suffix?: string;      // لاحقة اختيارية (مثل: "+")
  from?: number;        // بداية العد (افتراضي: 0)
};

/** خصائص الكمبوننت */
type StatsCounterProps = {
  items: StatItem[];
  durationMs?: number;          // مدة العدّ بالمللي ثانية (افتراضي 1600)
  easing?: (t: number) => number; // دالة الإيزنغ
  arabicDigits?: boolean;       // عرض الأرقام بالأرقام العربية ٠١٢٣... (افتراضي true)
  className?: string;           // كلاس خارجي لاستخدام تنسيقاتك
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function StatsCounter({
  items,
  durationMs = 1600,
  easing = easeOutCubic,
  arabicDigits = true,
  className = "",
}: StatsCounterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  // يفضّل احترام إعدادات تقليل الحركة لذوي الاحتياجات
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }, []);

  // مراقبة الظهور في الشاشة
  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) {
      setStart(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStart(true)),
      { threshold: 0.2 }
    );
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className={`stats-wrapper ${className}`}
      dir="rtl"
      aria-label="إحصاءات"
    >
      <div className="stats-grid">
        {items.map((it, i) => (
          <StatCard
            key={i}
            item={it}
            durationMs={durationMs}
            easing={easing}
            arabicDigits={arabicDigits}
            start={start}
          />
        ))}
      </div>

      {/* تنسيقات محلية عبر styled-jsx لتكون ذاتية الاكتفاء */}
      <style jsx>{`
      
      `}</style>
    </section>
  );
}

function StatCard({
  item,
  durationMs,
  easing,
  arabicDigits,
  start,
}: {
  item: StatItem;
  durationMs: number;
  easing: (t: number) => number;
  arabicDigits: boolean;
  start: boolean;
}) {
  const { value, label, suffix = "+", from = 0 } = item;
  const [display, setDisplay] = useState(from);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  // مهيئ الأرقام حسب العربية
  const formatter = useMemo(() => {
    const locale = arabicDigits ? "ar-EG" : "en-US";
    return new Intl.NumberFormat(locale);
  }, [arabicDigits]);

  useEffect(() => {
    if (!start) return;
    cancelAnimationFrame(rafRef.current ?? 0);
    startRef.current = null;

    const animate = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const p = Math.min(1, (ts - startRef.current) / durationMs);
      const eased = easing(p);
      const current = Math.round(from + (value - from) * eased);
      setDisplay(current);
      if (p < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current ?? 0);
  }, [start, value, from, durationMs, easing]);

  return (
    <div className="stat-card">
      <div className="number">
        {formatter.format(display)}
        {suffix ? <span className="suffix">{suffix}</span> : null}
      </div>
      <div className="label">{label}</div>

      <style jsx>{`
        .stat-card {
          text-align: center;
          padding: 20px 12px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          outline: 1px solid rgba(255,255,255,0.12);
          transition: transform 240ms ease, background 240ms ease;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.08);
        }
        .number {
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 800;
          letter-spacing: 0.5px;
          line-height: 1.1;
        }
        .suffix {
          margin-inline-start: 4px;
          font-weight: 800;
        }
        .label {
          margin-top: 8px;
          color: var(--muted);
          font-size: 15px;
        }
      `}</style>
    </div>
  );
}
