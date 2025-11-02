'use client'
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaTiktok, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const socials = [
  { icon: <FaFacebookF />, link: 'https://www.facebook.com/fajer.al5er' },
  { icon: <FaInstagram />, link: 'https://www.instagram.com/fajer__alkhair' },
  { icon: <FaYoutube />, link: 'https://www.youtube.com/@fajer.alkhair' },
  { icon: <FaWhatsapp />, link: 'https://wa.me/962781607560' },
  { icon: <FaTiktok />, link: 'https://www.tiktok.com/@fajer.alkhair?_t=8k0sba26uUp&_r=1' },
];

const legalLinks = [
  { label: 'الشروط والأحكام', href: '/terms' },
  { label: 'سياسة الخصوصية', href: '/privacy-policy' },
  { label: 'سياسة الاسترداد والإلغاء', href: '/refund-cancellation' },
  { label: 'سياسة ملفات الارتباط', href: '/cookies-policy' },
  { label: 'اتصل بنا', href: '/contact' },
];

const Footer = () => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    if (!lottieContainer.current) return;
    const animation = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/data.json',
    });
    return () => animation.destroy();
  }, []);

  return (
    <footer className="bg-[#88451e] text-white pt-12 pb-0 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* شعار */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="col-lg-3 col-12 mb-4">
            <div
              ref={lottieContainer}
              style={{ width: '150px', height: '150px', filter: 'brightness(0) invert(1)' }}
              aria-label="Fajr Alkhair animated logo"
            />
          </div>
        </div>

        {/* سوشيال ميديا */}
        <div className="flex flex-col items-center gap-3">
          <div className="h-10" />
          <div className="flex flex-row gap-4 text-2xl">
            {socials.map((s, i) => (
              <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-all" aria-label={`social-${i}`}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* معلومات الاتصال */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h3 className="text-2xl font-bold text-white mb-2">معلومات الاتصال</h3>
          <a href="tel:+962781607560" className="flex items-center gap-2 hover:underline">
            <FaPhoneAlt className="text-lg" /> 00962781607560
          </a>
          <a href="tel:+971502919085" className="flex items-center gap-2 hover:underline">
            <FaPhoneAlt className="text-lg" /> 00971502919085
          </a>
          <a href="mailto:info@fajeralkhair.com" className="flex items-center gap-2 hover:underline">
            <FaEnvelope className="text-lg" /> info@fajeralkhair.com
          </a>
        </div>
      </div>

      {/* خط فاصل */}
      <div className="border-t border-amber-200/30 my-6" />

      {/* روابط قانونية */}
      <div className="max-w-7xl mx-auto pb-2">
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm md:text-[15px] text-white/90" aria-label="روابط قانونية">
          {legalLinks.map((l, i) => (
            <Link key={i} href={l.href} className="hover:text-amber-300 transition-colors underline-offset-4 hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* خط فاصل خفيف */}
      <div className="border-t border-amber-200/20 my-4" />

      {/* وسائل الدفع + حقوق النشر */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pb-4">
        <div className="flex items-center gap-2 text-2xl">
          <img src="/rate/visa-card.png" alt="Visa" className="bg-white rounded p-1 w-10 h-8 object-contain" />
          <img src="/rate/card.png" alt="Mastercard" className="bg-white rounded p-1 w-10 h-8 object-contain" />
          <img src="/rate/apple-pay.png" alt="Apple Pay" className="bg-white rounded p-1 w-10 h-8 object-contain" />
        </div>
        <div className="text-sm text-white/80">© 2025 جميع الحقوق محفوظة لفجر الخير</div>
      </div>
    </footer>
  );
};

export default Footer;
