import {
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import contactBanner from "../assets/images/Hero-img/slide1.jpg";
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  return (
    <div className="w-full">

      {/* ===== TOP BANNER ===== */}
      <section
        className="relative h-[50vh] md:h-[60vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${contactBanner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-orange-500">
            CONTACT US
          </h1>
          <div className="w-12 h-[2px] bg-white mx-auto my-4"></div>
          <p className="text-sm text-gray-200 leading-relaxed">
            Need an expert? You are more than welcomed to leave your contact
            info and we will be in touch shortly.
          </p>
        </div>
      </section>

      {/* ===================== CONTACT CARDS ================= */}
      <section className="bg-gradient-to-b from-[#1C1917] via-[#111827] to-black py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* VISIT US */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition">
            <FaHome className="text-3xl text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-300 tracking-widest mb-3">
              VISIT US
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Visit our bakery store and enjoy the fresh taste of sweets.
            </p>
            <p className="text-sm text-orange-500 font-medium">
              2 Elizabeth St, London, UK
            </p>
          </div>


          {/* CALL US */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition ">
            <FaPhoneAlt className="text-3xl text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-300 tracking-widest mb-3">
              CALL US
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Feel free to call us anytime for orders & queries.
            </p>
            <p className="text-sm text-orange-500 font-medium">
              +44 (0) 203 116 7711
            </p>
          </div>


          {/* CONTACT US */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition">
            <FaEnvelope className="text-3xl text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-300 tracking-widest mb-3">
              CONTACT US
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Drop us an email and we’ll respond shortly.
            </p>
            <p className="text-sm text-orange-500 font-medium">
              noreply@domain.com
            </p>
          </div>
        </div>
      </section>

      {/* ================== MESSAGE + INFO =============================== */}
     <section className="relative py-24
  bg-gradient-to-b
  from-[#020617]
  via-[#020617]
  to-[#020617]">

    <div className="absolute inset-0
  bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_55%)]">
</div>

  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

    {/* ===== LEFT : CONTACT FORM ===== */}
    <div className="lg:col-span-2
                bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#020617]
                rounded-3xl p-10
                shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                border border-white/10">

  <p className="text-sm tracking-widest text-teal-400 mb-2">
    CONTACT US
  </p>

  <h2 className="text-3xl font-serif mb-8 text-white">
    Get in Touch with Us
  </h2>

  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* inputs */}
    <input
      type="text"
      placeholder="First Name *"
      className="bg-white/5 text-white placeholder-gray-400
                 border border-white/10 rounded-xl px-4 py-3
                 outline-none focus:ring-2 focus:ring-teal-400"
    />

    <input
      type="text"
      placeholder="Last Name *"
      className="bg-white/5 text-white placeholder-gray-400
                 border border-white/10 rounded-xl px-4 py-3
                 outline-none focus:ring-2 focus:ring-teal-400"
    />

    <input
      type="email"
      placeholder="Email *"
      className="bg-white/5 text-white placeholder-gray-400
                 border border-white/10 rounded-xl px-4 py-3
                 outline-none focus:ring-2 focus:ring-teal-400"
    />

    <input
      type="text"
      placeholder="Phone *"
      className="bg-white/5 text-white placeholder-gray-400
                 border border-white/10 rounded-xl px-4 py-3
                 outline-none focus:ring-2 focus:ring-teal-400"
    />

    <input
      type="text"
      placeholder="Subject *"
      className="md:col-span-2 bg-white/5 text-white placeholder-gray-400
                 border border-white/10 rounded-xl px-4 py-3
                 outline-none focus:ring-2 focus:ring-teal-400"
    />

    <textarea
      rows="4"
      placeholder="Your Message *"
      className="md:col-span-2 bg-white/5 text-white placeholder-gray-400
                 border border-white/10 rounded-xl px-4 py-3
                 outline-none focus:ring-2 focus:ring-teal-400"
    ></textarea>

    <button
      className="md:col-span-2 w-fit
                 bg-gradient-to-r from-teal-400 to-cyan-500
                 text-black px-10 py-3 rounded-full
                 hover:from-teal-300 hover:to-cyan-400
                 shadow-xl transition-all"
    >
      Send Message
    </button>

  </form>
</div>

    {/* ==================== RIGHT :  INFO CARD ========================== */}


<div
  className="relative rounded-3xl p-8
             bg-gradient-to-br from-slate-800 via-slate-900 to-black
             text-white shadow-2xl overflow-hidden"
>
  {/* subtle glow */}
  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent pointer-events-none" />

  <div className="relative flex flex-col gap-8">

    {/* HEADER */}
    <div>
      <span className="inline-block mb-2 text-xs tracking-widest uppercase text-emerald-400">
        Contact Details
      </span>
      <h2 className="text-2xl font-semibold">
        Visit & Reach Us
      </h2>
    </div>

    {/* ADDRESS */}
    <div className="flex gap-4">
      <div className="p-3 rounded-xl bg-white/10">
        <MapPin className="w-5 h-5 text-emerald-400" />
      </div>
      <div>
        <h3 className="font-medium text-lg mb-1">Address</h3>
        <p className="text-sm text-white/80 leading-relaxed">
          785 Carriage Drive <br />
          Jacksonville Beach, FL
        </p>
      </div>
    </div>

    {/* CONTACT */}
    <div className="flex gap-4">
      <div className="p-3 rounded-xl bg-white/10">
        <Phone className="w-5 h-5 text-emerald-400" />
      </div>
      <div>
        <h3 className="font-medium text-lg mb-1">Contact</h3>
        <p className="text-sm text-white/80">+1 203-284-2818</p>
        <div className="flex items-center gap-2 text-sm text-white/80 mt-1">
          <Mail className="w-4 h-4" />
          info@your-site.com
        </div>
      </div>
    </div>

    {/* OPENING HOURS */}
    <div className="flex gap-4">
      <div className="p-3 rounded-xl bg-white/10">
        <Clock className="w-5 h-5 text-emerald-400" />
      </div>
      <div>
        <h3 className="font-medium text-lg mb-1">Opening Hours</h3>
        <ul className="text-sm space-y-1 text-white/80">
          <li>Mon – Fri : 09:00 – 22:00</li>
          <li>Saturday : 11:00 – 20:00</li>
          <li>Sunday : Closed</li>
        </ul>
      </div>
    </div>

    {/* MINI MAP */}
    <div>
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="w-4 h-4 text-emerald-400" />
        <h3 className="text-lg font-medium">
          Find Us on Map
        </h3>
      </div>

      <div className="relative rounded-2xl overflow-hidden border border-white/10">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Jacksonville%20Beach%20FL&output=embed"
          className="w-full h-36 border-0"
          loading="lazy"
        ></iframe>

        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur
                        px-3 py-1 rounded-full text-xs">
          Jacksonville Beach
        </div>
      </div>
    </div>

    {/* SOCIAL */}
    <div>
      <h3 className="text-lg font-medium mb-3">
        Stay Connected
      </h3>
      <div className="flex gap-4">
        {[FaFacebookF, FaPinterestP, FaTwitter, FaInstagram, FaYoutube].map(
          (Icon, i) => (
            <div
              key={i}
              className="p-3 rounded-full bg-white/10
                         hover:bg-emerald-500 hover:text-black
                         transition cursor-pointer"
            >
              <Icon className="text-lg" />
            </div>
          )
        )}
      </div>
    </div>

  </div>
</div>



  </div>
</section>


      {/* ===== FOOTER STYLE SECTION ===== */}
      {/* <section className="relative bg-black py-20 ">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-white items-center">

        
          <div className=" text-center">
            <h2 className="text-3xl font-serif">Sri Hari Sweets</h2>
            <p className="text-sm text-gray-400">Sweet Bakery</p>
          </div>

         
        </div>

        
      </section> */}
    </div>
  );
}
