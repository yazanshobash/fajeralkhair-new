import React from "react";

const cookies = [
  { title: "ما هي ملفات الارتباط؟", content: `
هي ملفات نصية صغيرة تُحفَظ على جهازك عند زيارة الموقع، وتُستخدم لتذكّر تفضيلاتك وتحسين الأداء.
`},
  { title: "أنواع نستخدمها", content: `
• الضرورية: لتمكين وظائف أساسية (تسجيل الدخول، الحفظ).
• الأداء/التحليلات: لفهم كيفية استخدام الزوار للموقع وتحسينه.
• التخصيص: لتذكر اختياراتك (اللغة/التفضيلات).
`},
  { title: "إدارة الموافقة", content: `
يمكنك قبول/رفض بعض الفئات من خلال أدوات المتصفح أو أي شريط موافقة نقدمه. قد يؤدي الرفض إلى تقليل بعض الوظائف.
`},
  { title: "كيفية التعطيل", content: `
يمكنك تعطيل ملفات الارتباط من إعدادات المتصفح (Chrome/Firefox/Safari/Edge). راجع مركز المساعدة في متصفحك لمعرفة الخطوات.
`},
  { title: "التحديثات", content: `
قد نقوم بتحديث هذه السياسة دورياً. استمرار استخدامك للموقع بعد النشر يُعد موافقة على التحديثات. نوصي بمراجعتها بانتظام.
`},
];

const CookiesPolicy = () => {
  return (
    <section className="relative min-h-screen w-full py-16 px-2 md:px-0 flex items-center justify-center bg-gradient-to-br from-amber-50 via-amber-100 to-white overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-30 -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-2xl opacity-20 -z-10 animate-pulse" />
      <div className="max-w-3xl w-full mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-amber-700 drop-shadow-lg tracking-tight">سياسة ملفات الارتباط (Cookies)</h1>
        <p className="mb-12 text-lg text-gray-700 text-center font-medium bg-white/60 rounded-xl shadow px-4 py-3 backdrop-blur-sm border border-amber-100">
          نستخدم ملفات الارتباط لتحسين تجربتك وتحليلات الأداء، ويمكنك التحكم بها من خلال متصفحك. يُعد استمرارك في استخدام الموقع موافقة منك على استخدام ملفات الارتباط وفق هذه السياسة.
        </p>
        <div className="space-y-8">
          {cookies.map((item, idx) => (
            <div key={idx}
              className="relative flex items-start gap-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border-l-8 border-amber-300 p-6 group hover:scale-[1.025] transition-transform duration-300"
              style={{ animation: `fadeInUp 0.5s ${0.1 * idx + 0.2}s both` }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white -mt-2">{idx + 1}</div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-1 text-amber-700 drop-shadow-sm">{item.title}</h2>
                <p className="text-gray-800 leading-relaxed text-base md:text-lg font-normal whitespace-pre-line">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center text-gray-500 text-base md:text-lg font-semibold bg-white/60 rounded-xl shadow px-4 py-3 backdrop-blur-sm border border-amber-100">© فجر الخير ٢٠٢٥ جميع الحقوق محفوظة</p>
      </div>
      <style>{`@keyframes fadeInUp{from{opacity:0;transform:translateY(40px);}to{opacity:1;transform:none;}}`}</style>
    </section>
  );
};

export default CookiesPolicy;

