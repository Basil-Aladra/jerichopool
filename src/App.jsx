import logo from "./assets/logo5.png";
import proflie from "./assets/profile.png";
import call from "./assets/icons8-call.gif";
function App() {
  return (
    <>
      <div className="flex justify-center items-center h-full bg">
        <div className="w-full max-w-md    rounded-2xl overflow-hidden relative bg-cover bg-center h-screen">
          {/* Cover Image */}
          <div className="relative">
            <img
              src={proflie}
              alt="Almond Cakes & Coffee"
              className="w-full h-60 object-cover"
            />

            {/* Logo Box Positioned Over Image */}
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex justify-center">
              <div className="relative ">
                {/* نص دائري حول الصورة */}

                {/* الصورة الدائرية */}
                <div className="  -left-1 p-1 -bottom-18  relative z-10">
                  <img
                    src={logo}
                    alt="Almond Logo"
                    className="w-72 h-72 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 pt-12 pb-6 mt-10">
            <div className="mt-8 ">
              {/* الزرين بجانب بعض */}
              <div className="flex justify-center gap-2 mb-10 mt-10">
                <a
                  href="tel:+970599977074"
                  className="relative inline-flex h-12 w-full overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                    اتصل بنا
                    <img src={call} alt="Call" className="w-5 h-5 ml-3" />
                  </span>
                </a>
              </div>

              {/* أزرار فيسبوك تحت بعض */}
              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://www.facebook.com/JerichoPools/?locale=ar_AR"
                  className="relative w-full inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-xl group"
                >
                  {/* خلفيات الزر الثلاثة */}
                  <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#16ADE0] rounded-xl group-hover:mt-0 group-hover:ml-0"></span>
                  <span className="absolute inset-0 w-full h-full border border-gray-800 bg-white rounded-xl "></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#16ADE0] rounded-xl opacity-0 group-hover:opacity-100 "></span>

                  {/* المحتوى الفعلي */}
                  <span className="relative flex items-center gap-2 text-[#16ADE0] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                    Facebook
                    <img
                      width="33"
                      height="33"
                      src="https://img.icons8.com/fluency/48/facebook-circled.png"
                      alt="facebook-circled"
                    />
                  </span>
                </a>

                <a
                  href="http://wa.me/+970599977074"
                  className="relative w-full inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-xl group"
                >
                  {/* خلفيات الزر الثلاثة */}
                  <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#59D165] rounded-xl group-hover:mt-0 group-hover:ml-0"></span>
                  <span className="absolute inset-0 w-full h-full border border-gray-800 bg-white rounded-xl "></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#59D165] rounded-xl opacity-0 group-hover:opacity-100 "></span>

                  {/* المحتوى الفعلي */}
                  <span className="relative flex items-center gap-2 text-[#59D165] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                    whatsapp
                    <img
                      width="33"
                      height="33"
                      src="https://img.icons8.com/color/48/whatsapp--v1.png"
                      alt="whatsapp--v1"
                    />
                  </span>
                </a>

                <a
                  href="https://www.tiktok.com/@jerichopools?is_from_webapp=1&sender_device=pc"
                  className="relative w-full inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-xl group"
                >
                  {/* خلفيات الزر الثلاثة */}
                  <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#000000] rounded-xl group-hover:mt-0 group-hover:ml-0"></span>
                  <span className="absolute inset-0 w-full h-full border border-gray-800 bg-white rounded-xl "></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#000000] rounded-xl opacity-0 group-hover:opacity-100 "></span>

                  {/* المحتوى الفعلي */}
                  <span className="relative flex items-center gap-2 text-[#000000] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                    TikTok
                    <img
                      width="33"
                      height="33"
                      src="https://img.icons8.com/color/48/tiktok--v1.png"
                      alt="tiktok--v1"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3309.2194062621516!2d35.454531684840994!3d31.861991881257946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDUxJzQzLjIiTiAzNcKwMjcnMDguNCJF!5e1!3m2!1sar!2s!4v1751663356568!5m2!1sar!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
}

export default App;
