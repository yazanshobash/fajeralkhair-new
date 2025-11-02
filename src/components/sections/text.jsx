'use client'

import { FaRegClipboard, FaPhoneAlt, FaHandHoldingHeart, FaHammer, FaMoneyCheckAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/navigation';

const Text = () => {
  const router = useRouter();

  const handleAboutUs = () => {
    router.push('/aboutus');
  };

  const steps = [
    {
      icon: <FaHandHoldingHeart size={32} />, title: 'اختيار المشروع', num: 1,
      desc: 'يختار العميل المشروع المناسب من صفحة المشاريع على موقعنا، وتتم عملية الدفع مباشرة، أو يمكنه التواصل معنا للاستفسار والمساعدة في اختيار المشروع الأنسب.'
    },
    {
      icon: <FaPhoneAlt size={32} />, title: 'التواصل مع العميل', num: 2,
      desc: 'من بعد الدفع سيقوم فريقنا بالتواصل مع العميل وأخذ منه المعلومات لكتابة السند واللوحة المتواجدة في كل مرحلة وعلى شاهد الأرقام الثابت على البئر.'
    },
    {
      icon: <FaMoneyCheckAlt size={32} />, title: 'تأكيد الطلب', num: 3,
      desc: 'نرسل للعميل موقع المشروع المقترح وتصميم اللوحة للاطلاع والموافقة. بعد التأكد على الموقع وصحة المعلومات، نبدأ بتنفيذ المشروع.'
    },
    {
      icon: <FaHammer size={32} />, title: 'بدء التنفيذ', num: 4,
      desc: 'يبدأ التنفيذ مباشرة بعد الموافقة، ويبقى فريقنا على تواصل مستمر مع العميل طوال مدة تنفيذ المشروع.'
    },
    {
      icon: <FaRegClipboard size={32} />, title: 'تقرير المشروع', num: 5,
      desc: 'نرسل تقارير يومية تحتوي على صور وفيديوهات لكل مراحل العمل، من البداية حتى الانتهاء. بعد الانتهاء، يتم إرسال عقد الضمان للعميل مع الموقع الجغرافي (GPS) للمشروع، كما نقوم بالمتابعة الدورية لضمان استمرارية عمل المشروع.'
    },
  ];

  const testimonials = [
    '/rate/2.webp',
    '/rate/3.webp',
    '/rate/4.webp',
    '/rate/5.webp',
    '/rate/6.webp',
    '/rate/7.webp',
    '/rate/8.webp',
    '/rate/9.webp',
    '/rate/10.webp',
    '/rate/11.webp',
    '/rate/اراء.webp',
  ];

  return (
    <>
      <section className="w-full py-12 mt-4 px-4 bg-amber-800 flex flex-col items-center justify-center">
        <div className="max-w-2xl flex flex-col items-center gap-6 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow mb-2">فجر الخير</h1>
          <p className="text-amber-100 text-lg md:text-xl leading-relaxed">
            نحن في <span className="font-bold text-white">فجر الخير لإدارة المشاريع ذ.م.م</span> <br /><br />
           شركة إماراتية مرخصة تعمل في إدارة وتنفيذ المشاريع الخدمية والإنسانية التي تُحدث أثرًا حقيقيًا في حياة المجتمعات المحتاجة.
تشمل خدماتنا حفر الآبار، بناء المساجد، توزيع السلال الغذائية، وتقديم المبادرات الصحية والتعليمية.
نحرص على تقديم حلول ميدانية موثوقة تسهم في التنمية المستدامة وتحسين جودة الحياة في آسيا
          </p>
          <button
            onClick={handleAboutUs}
            className="bg-white text-[#B65B1B] font-bold rounded-full px-8 py-3 shadow-lg hover:bg-amber-100 hover:text-amber-900 transition-all text-lg mt-2 cursor-pointer"
          >
            تعرف علينا
          </button>
        </div>
      </section>

      <section className="w-full py-16 px-2 md:px-8 bg-gradient-to-b from-[#fff7f0] to-[#fafaf7] flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#B65B1B] text-center mb-12">خطوات اختيار وتنفيذ المشاريع</h2>
        <div className="relative flex flex-row flex-nowrap items-stretch justify-start gap-8 w-full max-w-7xl mx-auto overflow-x-auto pb-4 px-2">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center bg-white rounded-3xl shadow-lg p-6 h-full min-w-[220px] max-w-xs transition-all duration-300 group hover:scale-105 relative z-10 flex-shrink-0">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#B65B1B] to-amber-400 text-white mb-4 shadow-md mx-auto text-3xl font-extrabold border-4 border-white group-hover:scale-110 transition-all duration-300 z-20">
                {step.num}
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#fff7f0] text-[#B65B1B] mb-3 shadow group-hover:bg-[#B65B1B]/10 group-hover:text-amber-700 transition-all duration-300 text-3xl">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-[#6d3b13] mb-1">{step.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed mt-2">{step.desc}</p>
              {idx < steps.length - 1 && (
                <span className="absolute top-1/2 right-[-60px] w-24 h-1 bg-gradient-to-l from-[#B65B1B]/70 to-amber-200/60 z-0"></span>
              )}
            </div>
          ))}
        </div>
        <a href="https://wa.me/962781607560" target="_blank" rel="noopener noreferrer" className="mt-12">
          <button className="flex items-center gap-2 cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-8 py-3 shadow-lg transition-all text-lg animate-bounce">
            تواصل معنا
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25m-19.5 0l9.75 7.5 9.75-7.5" />
            </svg>
          </button>
        </a>
      </section>

      {/* سكشن آراء العملاء */}
      <section className="w-full py-16 px-2 md:px-8 bg-[#fafaf7] flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#B65B1B] text-center mb-4">آراء العملاء</h2>
        <p className="text-lg md:text-xl text-gray-800 text-center mb-10 max-w-2xl">
          تجارب عملائنا تضيف ثقة لقرارك، ونحن هنا لمساعدتك في أي استفسار
        </p>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-xl">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={32}
              slidesPerView={1}
              className="w-full"
              style={{ direction: 'rtl' }}
            >
              {testimonials.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={img}
                      alt={`testimonial-${idx + 1}`}
                      className="w-full max-w-md rounded-3xl shadow-xl object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Text;
