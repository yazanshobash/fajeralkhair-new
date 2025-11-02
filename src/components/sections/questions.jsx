"use client"
import { useState } from "react";

const faqs = [
  
  {
    q: "ما هي الإجراءات لطلب المشاريع؟",
    a: `
      اختر مشروعك من صفحة <a href="/project" class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-bold">مشاريعنا</a>، ثم:
      <ol class="list-decimal pr-5 mt-2 space-y-1">
        <li>إتمام الدفع الآمن عبر الموقع.</li>
        <li>يتواصل معك فريقنا عبر واتساب أو البريد الإلكتروني لجمع البيانات (الاسم على اللوحة، معلومات التواصل، أي ملاحظات خاصة).</li>
        <li>نصدر عقد تنفيذ المشروع + سند قبض بالمبلغ.</li>
        <li>نبدأ التنفيذ ونزوّدك بتحديثات وصور حتى التسليم النهائي.</li>
      </ol>
    `
  },
  {
    q: "ما هي المناطق الأكثر احتياجًا؟",
    a: "نُحدّد الأولويات داخل آسيا وفق دراسات الاحتياج وشحّ المياه، مع التركيز على المناطق الأشد عطشًا."
  },
  {
    q: "كم المدة التي يستغرقها حفر البئر؟",
    a: "تستغرق عملية الحفر عادةً من 10 إلى 30 يومًا، وقد تختلف بحسب نوع البئر، وطبيعة التربة، وظروف الموقع."
  },
  {
    q: "ما هي الضمانات؟",
    a: `
      <ul class="list-disc pr-5 space-y-1">
        <li>عقد توكيل للمشروع + سند قبض بقيمة المبلغ.</li>
        <li>توثيق مراحل الحفر يوميًا بالصور والفيديو مع لوحة الأسماء حتى التشغيل.</li>
        <li>جولات تفقدية نصف سنوية وتقارير دورية للمتبرع لضمان الاستمرارية.</li>
        <li>مشاركة موقع البئر (GPS) بعد الإنجاز.</li>
      </ul>
    `
  },
  {
    q: "هل يوجد صيانة؟",
    a: "نعم، يوجد ضمان صيانة لمدة خمس سنوات، مع صيانة دورية كل ستة أشهر."
  },
  {
    q: "هل أستطيع زيارة المشروع؟",
    a: "نعم، يمكنك زيارة موقع المشروع بعد التنسيق المسبق، ونوفّر لك العنوان وننسّق مرافقة مندوبنا للوصول للموقع."
  },
  {
    q: "ما الفرق بين البئر الارتوازي والسطحي؟",
    a: "البئر الارتوازي أعمق وأكثر استدامة ويخدم عددًا أكبر من العائلات، بينما السطحي أقل عمقًا واستدامته أقصر ويخدم عددًا أقل."
  },
  {
    q: "في أي دول تُنفَّذ المشاريع؟",
    a: "في آسيا: باكستان، الهند، نيبال. وقد تُضاف دول آسيوية أخرى مثل إندونيسيا بحسب الحاجة والتراخيص."
  }
];



const Questions = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="relative w-full min-h-screen py-8 px-2 md:px-0 flex flex-col items-center justify-start bg-[#F37021] overflow-x-hidden">
      {/* مربع أبيض كبير */}
     
      <div className="max-w-3xl w-full mx-auto rounded-2xl bg-white shadow-2xl p-8 mt-4 mb-10 text-center flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-amber-600 drop-shadow-lg tracking-tight">الأسئلة الشائعة</h1>
        <p className="text-lg text-gray-700 font-medium mb-2">
          مرحبًا بكم في قسم الأسئلة الشائعة! هنا نجمع لكم الإجابات على الأسئلة التي تتكرر كثيرًا وتثير الفضول لمعرفتها. سواء كنت تبحث عن معلومات حول مشاريعنا، أو تود معرفة المزيد عن إجراءات الحفر والضمانات، ستجد كل ما تحتاجه هنا. إذا كان لديك سؤال آخر لا تجد إجابته، لا تتردد في التواصل معنا.
        </p>
        <span className="text-amber-700/80 text-base font-semibold mt-2">نحرص على تقديم معلومات واضحة ودقيقة لتسهيل عليكم تجربة التبرع والمشاركة في مشاريعنا الإنسانية.</span>
      </div>
      <img src="/rate/fqa.png" alt="" />
      {/* Accordion */}
      <div className="max-w-2xl w-full mx-auto bg-[#F37021] rounded-2xl shadow-xl overflow-hidden divide-y divide-white/80 border border-white/30">
        {faqs.map((item, idx) => (
          <div key={idx}>
            <button
              className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-lg text-white font-bold hover:bg-white/10 transition cursor-pointer rtl flex-row-reverse focus:outline-none`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              aria-expanded={openIdx === idx}
            >
              <span className="flex-1 text-right">{item.q}</span>
              <span className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-white/20">
                <img src="/rate/fqa.png" alt="FAQ" className="w-6 h-6 object-contain" />
              </span>
              <span className={`transition-transform duration-300 text-2xl ${openIdx === idx ? "rotate-180" : "rotate-0"}`}>⌃</span>
            </button>
            <div
              className={`px-8 pb-5 text-white text-base text-right leading-relaxed transition-all duration-300 ${openIdx === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
              style={{ direction: "rtl" }}
            >
              <span dangerouslySetInnerHTML={{ __html: item.a }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;