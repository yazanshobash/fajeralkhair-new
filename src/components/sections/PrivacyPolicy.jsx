import React from "react";

const privacy = [
  { title: "نطاق السياسة", content: `
تنطبق هذه السياسة على معالجة البيانات عبر موقع https://fajeralkhair.com («الموقع») المملوك والمُدار من شركة فجر الخير لإدارة المشاريع ذ.م.م.
`},
  { title: "البيانات التي نجمعها", content: `
قد نجمع: الاسم، البريد الإلكتروني، رقم الهاتف، عنوان الفواتير/الشحن، تفاصيل الطلبات، والمستندات اللازمة لخدمة العملاء. نجمع أيضًا بيانات تقنية عامة (مثل نوع المتصفح وأوقات الوصول) لتحسين الأداء.
`},
  { title: "كيفية استخدامنا للبيانات", content: `
نستخدم بياناتك لمعالجة المدفوعات والطلبات، التواصل بشأن الخدمات، الدعم الفني، والامتثال للالتزامات القانونية والتنظيمية داخل دولة الإمارات العربية المتحدة.
`},
  { title: "عدم مشاركة البيانات", content: `
لن يتم تخزين أو بيع أو مشاركة أو تأجير تفاصيل بطاقات الائتمان/الخصم أو أي معلومات شخصية لأي طرف ثالث. لا يمرر الموقع أي تفاصيل بطاقة الخصم/الائتمان إلى أطراف ثالثة.
`},
  { title: "أمان الدفع", content: `
يتم تنفيذ عمليات الدفع بأمان عبر بوابة Telr وفق معايير الأمان المعتمدة.
يتخذ موقع https://fajeralkhair.com
 الخطوات المناسبة لضمان خصوصية البيانات وأمنها من خلال منهجيات تقنية متعددة، ومع ذلك لا يمكن ضمان أمان مطلق لأي معلومات يتم كشفها عبر الإنترنت.
لا يتحمل موقع https://fajeralkhair.com
 المسؤولية عن أي إفشاء غير مقصود ناتج عن نقل المعلومات عبر الإنترنت.
`},
  { title: "الاحتفاظ بالبيانات", content: `
نحتفظ بالبيانات للفترات اللازمة لتقديم الخدمة والامتثال للمتطلبات القانونية والتنظيمية داخل دولة الإمارات العربية المتحدة، ثم نقوم بحذفها أو إخفاء هويتها بشكل آمن.
`},
  { title: "ملفات تعريف الارتباط (Cookies)", content: `
يستخدم الموقع ملفات تعريف الارتباط لتحسين التجربة وتحليلات الأداء. يمكنك تعطيل ملفات الارتباط من إعدادات المتصفح في أي وقت. قد يؤثر التعطيل على بعض الوظائف.
`},
  { title: "حقوقك", content: `
يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها (حيثما كان ذلك ممكنًا قانونيًا)، أو تقييد معالجتها. لطلب ذلك، تواصل معنا عبر البريد الإلكتروني الموضح في صفحة «اتصل بنا».
`},
  { title: "تحديثات السياسة", content: `
قد نقوم بتعديل هذه السياسة من وقت لآخر. يُعد استمرارك في استخدام الموقع بعد النشر موافقةً على التحديثات. نوصي بمراجعة الصفحة دوريًا.
`},
  { title: "جهة الاتصال", content: `
للاستفسارات المتعلقة بالخصوصية، يُرجى التواصل مع: info@fajeralkhair.com
`},
];

const PrivacyPolicy = () => {
  return (
    <section className="relative min-h-screen w-full py-16 px-2 md:px-0 flex items-center justify-center bg-gradient-to-br from-amber-50 via-amber-100 to-white overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-30 -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-2xl opacity-20 -z-10 animate-pulse" />
      <div className="max-w-3xl w-full mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-amber-700 drop-shadow-lg tracking-tight">سياسة الخصوصية</h1>
        <p className="mb-12 text-lg text-gray-700 text-center font-medium bg-white/60 rounded-xl shadow px-4 py-3 backdrop-blur-sm border border-amber-100">
          نلتزم بحماية خصوصيتك واستخدام بياناتك وفق القانون المُطبّق في دولة الإمارات العربية المتحدة 
        </p>
        <div className="space-y-8">
          {privacy.map((item, idx) => (
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

export default PrivacyPolicy;
