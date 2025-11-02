'use client'
import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

const CONTACT_ENDPOINT = 'https://www.fajeralkhair.com/contact.php';

const ContactUs = () => {
  const lottieContainer = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (lottieContainer.current) {
      const animation = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/data.json',
        rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
      });
      return () => animation.destroy();
    }
  }, []);

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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
        redirect: 'follow',
      });

      const contentType = res.headers.get('content-type') || '';
      const text = await res.text();

      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText} — ${text.slice(0, 200)}`);
      if (!contentType.includes('application/json')) throw new Error(`Expected JSON, got ${contentType || 'unknown'}. Preview: ${text.slice(0, 200)}`);

      const data = JSON.parse(text);

      if (data?.success) {
        setStatus({ type: 'success', message: data.message || '✅ تم إرسال رسالتك بنجاح' });
        e.target.reset();
      } else {
        setStatus({ type: 'error', message: data?.error || '❌ حدث خطأ غير متوقع' });
      }
    } catch (err) {
      console.error('خطأ في الإرسال:', err);
      setStatus({ type: 'error', message: String(err.message || '❌ فشل الاتصال بالسيرفر') });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row-reverse items-start justify-center gap-4 p-4 bg-gradient-to-b from-gray-100 to-white">
      {/* يسار: نموذج التواصل */}
      <div className="flex-1 max-w-xl bg-white rounded-2xl shadow-2xl p-6 mx-auto w-full">
        <h2 className="text-3xl font-extrabold text-amber-900 mb-4 text-center">نموذج الاتصال</h2>
        <p className="text-gray-600 text-center mb-4 text-base">
          اترك لنا رسالتك الآن وأخبرنا إذا كان هناك أي استفسار وسوف نتواصل معك في أسرع وقت ممكن
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 rtl" noValidate>
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="text" name="firstName" placeholder="الاسم الاول" required
              className="flex-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-amber-400" />
            <input type="text" name="lastName" placeholder="اسم العائلة" required
              className="flex-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-amber-400" />
          </div>
          <input type="email" name="email" placeholder="البريد الالكتروني" required
            className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-amber-400" />
          <textarea name="message" placeholder="محتوى الرسالة" rows={5} required
            className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-amber-400 resize-none" />
          <button type="submit" disabled={loading}
            className={`w-full bg-[#F37021] hover:bg-[#e05d0f] text-white font-bold py-3 rounded-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {loading ? 'جارٍ الإرسال...' : 'ارسل الرسالة'}
          </button>
          {status && (
            <div className={`mt-4 p-3 rounded ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>

      {/* خط فاصل رأسي */}
      <div className="hidden md:block h-[80%] border-r border-amber-100 mx-6 self-start" />

      {/* يمين: معلومات التواصل */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-start mt-6 md:mt-0 px-4 w-full">
        <h2 className="text-3xl font-extrabold text-amber-900 mb-4 text-center md:text-right">تواصل معنا</h2>
        <div className="mb-6 flex justify-center md:justify-start">
          <div ref={lottieContainer} className="w-40 h-40"></div>
        </div>
        <hr className="w-2/3 md:w-2/3 my-4 border-amber-200" />
        <div className="w-full max-w-sm mx-auto md:mx-0">
          <h3 className="text-xl font-bold text-[#F37021] mb-3 text-center md:text-right">معلومات الاتصال</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-gray-700 text-lg justify-center md:justify-start">
              <a href="tel:+962781607560" dir="ltr" className="inline-flex items-center gap-2 font-medium text-green-600 hover:text-green-700">
                📞 <span className="select-all">00962781607560</span>
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-700 text-lg justify-center md:justify-start">
              ✉️ <a href="mailto:info@fajeralkhair.com" className="hover:underline font-medium break-all">info@fajeralkhair.com</a>
            </div>
            <div className="flex items-center gap-3 text-gray-700 text-lg justify-center md:justify-start">
              🟢 <a href="https://wa.me/+962781607560" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">whatsapp</a>
            </div>

            {/* 🏢 عنوان المكتب الجديد كما طلبت Telr */}
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl shadow-sm">
              <h4 className="text-lg font-bold text-[#F37021] mb-2 text-center md:text-right">📍 عنوان المكتب</h4>
              <p className="text-gray-700 leading-relaxed text-center md:text-right font-medium">
                Office 203-310, KHALID SHABAN Building,<br />
                Plot 115-0, Al Garhoud, Dubai, United Arab Emirates<br />
                <span className="text-sm text-gray-500">(Makani: 32583)</span>
              </p>
            </div>
          </div>

          <a href="https://wa.me/00962781607560" target="_blank" rel="noopener noreferrer"
            className="block w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-full py-3 text-center shadow-lg">
            تواصل معنا عبر الواتساب
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
