'use client'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/navigation';

const products = [
  {
    image: '/1.webp',
    title: 'بئر كهربائي',
    desc: 'بمضخة يدوية وكهربائية',
    link: '#'
  },
  {
    image: '/2.webp',
    title: 'بئر ارتوازي(سيراميك)',
    desc: 'بمضخة يدوية وكهربائية وخزان',
    link: '#'
  },
  {
    image: '/3.webp',
    title: 'متوضأ(سيراميك)',
    desc: 'يتم التنفيذ بجانب مسجد',
    link: '#'
  },
  {
    image: '/6.webp',
    title:'أضاحي/عقائق',
    desc: 'توزع في اسيا وافريقيا',
    link: '#'
  },
];

const arrowColor = '#1976d2';
const arrowBg = 'rgba(255,255,255,0.9)';
const arrowShadow = '0 2px 12px rgba(25, 118, 210, 0.12)';

const rightArrowSVG = `
  <span class="relative group">
    <span class="absolute inset-0 rounded-full border-2 border-blue-200 bg-white/30 animate-pulse z-0"></span>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="relative z-10" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15" stroke="#1976d2" stroke-width="2" fill="none" />
      <path d="M12 8L20 16L12 24" stroke="#1976d2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </span>
`;
const leftArrowSVG = `
  <span class="relative group">
    <span class="absolute inset-0 rounded-full border-2 border-blue-200 bg-white/30 animate-pulse z-0"></span>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="relative z-10" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15" stroke="#1976d2" stroke-width="2" fill="none" />
      <path d="M20 8L12 16L20 24" stroke="#1976d2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </span>
`;

export default function Slider() {
  const router = useRouter();

  const handleViewMore = () => {
    router.push('/project');
  };

  // تخصيص شكل الأسهم
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .swiper-button-next, .swiper-button-prev {
        background: ${arrowBg} !important;
        color: ${arrowColor} !important;
        border-radius: 50%;
        box-shadow: ${arrowShadow};
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.95;
        transition: box-shadow 0.2s, opacity 0.2s, transform 0.2s;
        z-index: 20;
        cursor: pointer;
      }
      .swiper-button-next:after, .swiper-button-prev:after {
        display: none !important;
      }
      .swiper-button-next:hover, .swiper-button-prev:hover {
        box-shadow: 0 8px 32px 0 rgba(25, 118, 210, 0.18);
        opacity: 1;
        transform: translateY(-50%) scale(1.08);
      }
      .swiper-button-next {
        right: 0;
      }
      .swiper-button-prev {
        left: 0;
      }
    `;
    document.head.appendChild(style);
    setTimeout(() => {
      const next = document.querySelector('.swiper-button-next');
      const prev = document.querySelector('.swiper-button-prev');
      if (next && prev) {
        next.innerHTML = rightArrowSVG;
        prev.innerHTML = leftArrowSVG;
      }
    }, 100);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <section className="w-full py-12 mt-5 px-2 md:px-8 bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#B65B1B] text-center mb-10">الأكثر طلباً</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
        style={{ direction: 'rtl' }}
      >
        {products.map((product, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center justify-between bg-white rounded-3xl p-6 mx-2 min-h-[340px] transition-all duration-300 hover:scale-105 group">
              <div className="mt-12 mb-2 w-96 h-32 flex items-center justify-center">
                <img src={product.image} alt={product.title} className="w-full h-[full] object-contain drop-shadow-lg group-hover:-translate-y-2 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#B65B1B] mt-18 text-center">{product.title}</h3>
              <p className="text-gray-700 text-base mb-4 text-center">{product.desc}</p>
              <button 
                onClick={handleViewMore}
                className="mt-auto bg-[#B65B1B] cursor-pointer  hover:bg-amber-700 text-white font-bold rounded-xl px-6 py-2 shadow-md transition-all text-lg"
              >
                عرض المزيد
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
