'use client'
import { useState } from "react";

// ⬅️ غيّر هذا الرابط فقط إذا نقلت ملف contact.php
const CONTACT_ENDPOINT = 'https://www.fajeralkhair.com/contact.php';
// للتجربة على XAMPP:
// const CONTACT_ENDPOINT = 'http://localhost/fajerne/contact.php';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = {
      firstName: e.target.firstName.value.trim(),
      lastName: e.target.lastName.value.trim(),
      email: e.target.email.value.trim(),
      message: e.target.message.value.trim(),
    };

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
        redirect: 'follow',
      });

      const contentType = res.headers.get('content-type') || '';
      const text = await res.text();

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText} — ${text.slice(0, 200)}`);
      }

      if (!contentType.includes('application/json')) {
        throw new Error(`Expected JSON, got ${contentType || 'unknown'}. Preview: ${text.slice(0, 200)}`);
      }

      const data = JSON.parse(text);

      if (data?.success) {
        setStatus({ type: "success", message: data.message || "✅ تم إرسال رسالتك بنجاح" });
        e.target.reset();
      } else {
        setStatus({ type: "error", message: data?.error || "❌ حدث خطأ غير متوقع" });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: String(err.message || "❌ فشل الاتصال بالسيرفر") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-4" noValidate>
      <div className="flex gap-2">
        <input name="firstName" type="text" placeholder="الاسم الاول" required className="flex-1 border rounded px-3 py-2" />
        <input name="lastName" type="text" placeholder="اسم العائلة" required className="flex-1 border rounded px-3 py-2" />
      </div>
      <input name="email" type="email" placeholder="البريد الالكتروني" required className="w-full border rounded px-3 py-2" />
      <textarea name="message" placeholder="محتوى الرسالة" rows={5} required className="w-full border rounded px-3 py-2" />
      <button type="submit" disabled={loading} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold">
        {loading ? "جارٍ الإرسال..." : "ارسل الرسالة"}
      </button>
      {status && (
        <p className={`p-2 rounded ${status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {status.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
