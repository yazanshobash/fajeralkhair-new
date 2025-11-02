'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState, useRef } from "react";

const slides = [
  {
    image: "/125.webp",
    title: "إنسانية",
    desc: "من فضلك أخبر أصدقائك عن موقعنا"
  },
  {
    image: "/21.webp",
    title: "كن عونًا لهم",
    desc: "اسعدهم في توفير الماء لهم"
  },
  {
    image: "/RAMDAN.webp",
    title: "إدارة مشاريع خدمية وإنسانية",
    desc: "نسعى للتطوير المستمر في خدمة المجتمعات"
  },
];

const arrowColor = "#fff";
const arrowBorder = "#ffb86b"; // برتقالي فاتح
const arrowBg = "linear-gradient(135deg, #ffb86b 0%, #b65b1b 100%)";
const arrowShadow = "0 4px 24px 0 rgba(182,91,27,0.18)";
const progressActive = "#B65B1B";

const rightArrowSVG = `
  <span class="relative group">
    <span class="absolute inset-0 rounded-full border-4 border-[#ffb86b] bg-white/20 animate-pulse z-0"></span>
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" class="relative z-10" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="19" r="17" stroke="#ffb86b" stroke-width="3" fill="none" />
      <path d="M15 11L24 19L15 27" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <span class="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#B65B1B] text-white text-xs rounded px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 whitespace-nowrap">التالي</span>
  </span>
`;
const leftArrowSVG = `
  <span class="relative group">
    <span class="absolute inset-0 rounded-full border-4 border-[#ffb86b] bg-white/20 animate-pulse z-0"></span>
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" class="relative z-10" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="19" r="17" stroke="#ffb86b" stroke-width="3" fill="none" />
      <path d="M24 11L15 19L24 27" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <span class="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#B65B1B] text-white text-xs rounded px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 whitespace-nowrap">السابق</span>
  </span>
`;

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    // تخصيص شكل الأسهم
    const style = document.createElement('style');
    style.innerHTML = `
      .swiper-button-next, .swiper-button-prev {
        background: ${arrowBg} !important;
        color: ${arrowColor} !important;
        border-radius: 50%;
        box-shadow: ${arrowShadow};
        width: 68px;
        height: 68px;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.97;
        transition: box-shadow 0.2s, opacity 0.2s, transform 0.2s;
        z-index: 20;
        cursor: pointer;
      }
      .swiper-button-next:after, .swiper-button-prev:after {
        display: none !important;
      }
      .swiper-button-next:hover, .swiper-button-prev:hover {
        box-shadow: 0 8px 32px 0 rgba(182,91,27,0.28);
        opacity: 1;
        transform: translateY(-50%) scale(1.08);
      }
      .swiper-button-next {
        right: 24px;
      }
      .swiper-button-prev {
        left: 24px;
      }
      @media (max-width: 768px) {
        .swiper-button-next, .swiper-button-prev {
          width: 44px;
          height: 44px;
        }
        .swiper-button-next {
          right: 4px;
        }
        .swiper-button-prev {
          left: 4px;
        }
      }
    `;
    document.head.appendChild(style);
    // وضع الأيقونة المخصصة للأسهم
    setTimeout(() => {
      const next = document.querySelector('.swiper-button-next');
      const prev = document.querySelector('.swiper-button-prev');
      if (next && prev) {
        next.innerHTML = rightArrowSVG;
        prev.innerHTML = leftArrowSVG;
      }
    }, 100);
    return () => { document.head.removeChild(style); };
  }, [activeIndex]);

  // Progress bar animation
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      {/* Progress Bar */}
      <div className="w-full mb-2">
        <div className="h-2 w-full rounded-full bg-[#fff7f0] overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-200"
            style={{ width: `${progress}%`, background: progressActive }}
          ></div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={40}
        slidesPerView={1}
        className="w-full"
        style={{ direction: "ltr" }}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        onSwiper={swiper => (swiperRef.current = swiper)}
        speed={700}
        effect="slide"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`relative w-[100vw] h-[480px] md:h-[600px] md:rounded-3xl rounded-none overflow-hidden shadow-2xl flex items-end justify-center transition-all duration-500 ${activeIndex === idx ? 'scale-105' : 'scale-100'}`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
           
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#f5eee6', // لون خلفية محايد
              }}
            >
              {/* Gradient overlay from bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#B65B1B]/80 via-[#B65B1B]/30 to-transparent z-10"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* النص أسفل السلايدر */}
      <div className="w-full max-w-2xl mt-6 flex flex-col items-center justify-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-[#B65B1B] drop-shadow-lg text-center tracking-tight transition-all duration-500">{slides[activeIndex].title}</h2>
        <p className="text-lg md:text-2xl text-[#B65B1B] bg-[#fff7f0]/90 rounded-xl px-6 py-3 inline-block text-center shadow-md transition-all duration-500">{slides[activeIndex].desc}</p>
      </div>
    </div>
  );
};

export default ImageSlider;
