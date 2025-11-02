import React from 'react';

const whatsappNumber = '962781607560';
const whatsappMessage = encodeURIComponent('مرحبا ، ما هي التفاصيل  !');
const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;

const ChatWidget = ({ onClose }) => (
  <div className="fixed bottom-24 right-6 z-50 flex items-end justify-end max-w-full">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up relative">
      {/* رأس الدردشة */}
      <div className="bg-green-400 flex items-center justify-between px-4 py-3">
        <div className="flex  items-center gap-2">
          <img src="/LOGO.jpg" alt="فجر الخير" className="w-10  h-10 rounded-full border-2 " />
          <div>
            <div className="font-bold text-white text-lg">فجر الخير</div>
            <div className="text-xs text-white/80">عادةً ما يرد خلال دقائق</div>
          </div>
        </div>
        <button onClick={onClose} className="text-white cursor-pointer text-2xl font-bold hover:text-red-600 transition">×</button>
      </div>
      {/* محتوى الدردشة */}
      <div className="bg-[#f7f7f7] px-4 py-6 min-h-[180px] flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="bg-white rounded-lg shadow p-3 text-sm text-gray-800 self-start max-w-[80%]">
            <span className="font-bold">فجر الخير</span><br/>
            أهلاً وسهلاً بكم 🌟<br/>
            فريق فجر الخير في خدمتك لأي سؤال أو استفسار جاهزين للإجابة.
          </div>
          <div className="bg-green-100 rounded-lg shadow p-3 text-sm text-gray-900 self-end max-w-[80%]">
            مرحبا ، ما هي التفاصيل !
          </div>
        </div>
      </div>
      {/* زر الدردشة */}
      <div className="bg-white px-4 py-4 border-t flex justify-end">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-6 py-3 shadow transition-all text-lg"
        >
          <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
            <path d="m.76 21.24 1.412-5.12A10.324 10.324 0 0 1 .76 10.93C.76 5.35 5.35.76 10.964.76 16.58.76 21.24 5.35 21.24 10.93c0 5.578-4.661 10.31-10.276 10.31-1.765 0-3.46-.565-4.978-1.413L.76 21.24Z" fill="#EDEDED"></path>
            <path d="m6.268 17.991.318.177c1.307.812 2.825 1.306 4.414 1.306 4.626 0 8.474-3.848 8.474-8.545 0-4.696-3.848-8.404-8.51-8.404-4.66 0-8.439 3.743-8.439 8.404 0 1.624.46 3.213 1.307 4.555l.212.318-.812 2.966 3.036-.777Z" fill="#25D366"></path>
            <path d="m8.245 6.198-.671-.036a.802.802 0 0 0-.565.212c-.318.283-.848.812-.989 1.519-.247 1.059.141 2.33 1.06 3.601.918 1.271 2.683 3.32 5.79 4.202.989.283 1.766.106 2.402-.282.494-.318.812-.812.918-1.342l.105-.494a.355.355 0 0 0-.176-.389l-2.225-1.024a.337.337 0 0 0-.423.106l-.883 1.13a.275.275 0 0 1-.283.07c-.6-.211-2.613-1.059-3.707-3.177-.036-.106-.036-.212.035-.283l.848-.953c.07-.106.105-.247.07-.353L8.527 6.41a.308.308 0 0 0-.282-.212Z" fill="#FEFEFE"></path>
          </svg>
          ابدأ الدردشة
        </a>
      </div>
    </div>
  </div>
);

export default ChatWidget; 
