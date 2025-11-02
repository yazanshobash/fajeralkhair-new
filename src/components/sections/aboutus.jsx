'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ target, step = 50, delay = 10 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeout;
    const animate = () => {
      setCount((prev) => {
        if (prev < target) {
          const next = Math.min(prev + step, target);
          if (next < target) {
            timeout = setTimeout(animate, delay);
          }
          return next;
        }
        return target;
      });
    };
    animate();
    return () => clearTimeout(timeout);
  }, [target, step, delay]);

  return <span>{count}</span>;
};

const AboutUs = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-100 to-white py-10 px-2 sm:px-6 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 rounded-3xl shadow-lg max-w-7xl mx-auto mt-6">
      {/* صورة جانبية */}
      <div className="flex-1 flex flex-col items-center md:items-end w-full max-w-lg mb-6 md:mb-0 order-1 md:order-none">
        <div className="w-full grid grid-cols-2 gap-2 md:grid-cols-1">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/khair.webp"
              alt="جمعية فجر الخير"
              width={500}
              height={900}
              className="rounded-2xl object-cover w-full h-80 md:h-[600px] lg:h-[800px] shadow-xl border-4 border-white"
              priority
            />
          </div>
        </div>
      </div>
      {/* نص ومحتوى */}
      <div className="flex-1 flex flex-col items-center md:items-start text-right w-full">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-amber-900 mb-2">من نحن</h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#F37021] mb-4">شركة فجر الخير لإدارة المشاريع ذ.م.م</h3>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-4 max-w-xl">
          نختص بتقديم الخدمات والمشاريع الخدمية والإنسانية في آسيا وتحديداً في القرى المسلمة وقمنا بتنفيذ العديد من المشاريع الخدمية والإنسانية الناجحة والتي كان لها تأثير إيجابي كبير على حياة الناس
        </p>
        <div className="flex flex-col md:flex-row gap-8 w-full mb-6">
          {/* أرقام */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-gray-600 text-lg mb-1">تأسست</span>
            <span className="text-4xl font-extrabold text-[#F37021] mb-2">
              <AnimatedNumber target={2021} step={50} delay={5} />
            </span>
            <span className="text-gray-600 text-lg mb-1">نفذنا أكثر من</span>
            <span className="text-4xl font-extrabold text-[#F37021]">
              <AnimatedNumber target={1000} step={25} delay={5} />
            </span>
            <span className="text-gray-600 text-lg">مشروع</span>
          </div>
          {/* مهمتنا */}
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-[#F37021] mb-2">مهمتنا</h4>
            <p className="text-gray-700 mb-2 text-base sm:text-lg">
              نحن نتطلع الى خدمتكم على أكمل وجه وتلبية احتياجاتكم عبر مندوبينا المتواجدين في أغلب الدول بما يعكس قيم الاحترام والتفاني في العمل وبناء علاقات مستدامة مع عملائنا وتوفير لكم:
            </p>
            <ul className="list-disc pr-5 text-gray-700 space-y-1 text-base sm:text-lg">
              <li>الالتزام بالمعايير العالمية في تنفيذ المشاريع <span className="inline-block text-green-500 text-xl align-middle">✔️</span></li>
              <li>توثيق كامل لمراحل عمل المشروع من البداية حتى الانتهاء منه بشكل يومي <span className="inline-block text-green-500 text-xl align-middle">✔️</span></li>
              <li>عقود رسمية موقعة ومختومة من الشركة لضمان الحقوق <span className="inline-block text-green-500 text-xl align-middle">✔️</span></li>
              <li>متابعة المشروع والصيانة الدورية له والتكفل بالصيانة لمدة 5 سنوات <span className="inline-block text-green-500 text-xl align-middle">✔️</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 