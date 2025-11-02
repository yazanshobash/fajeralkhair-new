import Image from "next/image";

const issues = [
  {
    title: "توفير الغذاء لهم",
    image: "/rate/sala.webp",
    desc: `لا بد من توافر الطعام والغذاء لتستمر الحياة لذلك نحن نسعى في توفير الغذاء للأسر الفقيرة في القرى المسلم في (الهند-بنغلادش-نيبال) من خلال توفير السلال الغذائية او الذبائح والعقائق`,
  },
  {
    title: "بناء المدارس والمساجد",
    image: "/rate/school.webp",
    desc: `لا شك أن حاجة المسلمين إلى المساجد والمدارس ماسة، أكن لا يزال حال المساجد والمدارس في القرى الفقيرة غير لائقة أو أن المساجد لا تسع عدد المصلين، وأن المدارس بعيدة عن القرى وكثيراً من المسلمين ليس لهم مسجد يصلون فيه، نحن نسعى لتوفير`,
  },
  {
    title: "توفير المياه الصالحة للشرب",
    image: "/rate/water.webp",
    desc: `الماء هي الحياة ولا حياة من غير ماء لذلك نسعى لتوفير المياه النظيفة للمناطق الذي يصعب به الحصول على ماء صالحة للشرب لتحسين حياة الأسر والتقليل من الامراض`,
  },
];

const IssuesSection = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-amber-900 text-center mb-2">قضايانا</h2>
        <div className="flex justify-center mb-10">
          <span className="relative flex items-center">
            <span className="block w-24 h-1 bg-amber-200 rounded-full" />
            <span className="mx-2 text-2xl text-amber-500">♡</span>
            <span className="block w-24 h-1 bg-amber-200 rounded-full" />
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {issues.map((issue, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-3xl shadow-lg flex flex-col items-center p-4 sm:p-6 transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <div className="w-full h-64 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={issue.image}
                  alt={issue.title}
                  width={500}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#F37021] mb-2 text-center">{issue.title}</h3>
              <p className="text-gray-700 text-base sm:text-lg text-center leading-relaxed">{issue.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function IssuesPage() {
  return null;
}