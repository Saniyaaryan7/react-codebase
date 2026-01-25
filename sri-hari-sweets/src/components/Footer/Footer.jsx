import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative  text-white overflow-hidden">

      {/* TOP CURVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,20 480,80 720,60 960,40 1200,20 1440,60 L1440,0 L0,0 Z"
            fill="#0b0d1a"
          />
        </svg>
      </div>

      {/* BACKGROUND */}
      <div className="bg-gradient-to-br from-[#0b0d1a] via-[#1b1f3b] to-[#2a1454]">
        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

            {/* CONTACT */}
            <div>
              <h2 className="text-3xl font-serif mb-6 text-[#e6c17a]">
                Our Contacts
              </h2>

              <p className="text-sm leading-7 text-gray-300">
                250 Biscayne Blvd. (North) 11st Floor <br />
                New World Tower Miami, Florida 33148
              </p>

              <p className="mt-4 text-sm text-gray-300">
                📞 (305) 333-5522 
               
              </p>

              <p className="mt-2 text-sm text-gray-300">
                
                ✉️ info@your-site.com
              </p>

              <div className="flex gap-4 mt-8">
                <Icon><FaFacebookF /></Icon>
                <Icon><FaPinterestP /></Icon>
                <Icon><FaTwitter /></Icon>
                <Icon><FaInstagram /></Icon>
                <Icon><FaWhatsapp /></Icon>
              </div>
            </div>

            {/* GALLERY */}
            <div>
              <h2 className="text-3xl font-serif mb-6 text-center text-[#e6c17a]">
                Crafted With Love
              </h2>

              <div className="grid grid-cols-3 gap-4">
                {[
                  "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62",
                  "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
                  "https://i.pinimg.com/1200x/bd/16/95/bd169527a3bcb9cdae6a229bee5eb2e3.jpg",
                  "https://i.pinimg.com/736x/45/43/7a/45437a7fc75d4ff31373df0a1d4ba729.jpg",
                  "https://i.pinimg.com/1200x/c9/74/7b/c9747b3360370853e7c80e40ef1819e0.jpg",
                  "https://images.unsplash.com/photo-1599785209707-a456fc1337bb",
                ].map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-md">
                    <img
                      src={img}
                      alt="sweet"
                      className="w-full h-24 object-cover hover:scale-110 transition"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <h2 className="text-3xl font-serif mb-6 text-[#e6c17a]">
                Leave a Message
              </h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-white/10 backdrop-blur placeholder:text-gray-400 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-white/10 backdrop-blur placeholder:text-gray-400 outline-none"
                />

                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full p-3 bg-white/10 backdrop-blur placeholder:text-gray-400 outline-none resize-none"
                />

                <button className="bg-[#e6c17a] text-black px-8 py-3 font-semibold hover:opacity-90 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="text-center text-sm text-gray-400 mt-20">
            © 2026 Sri Hari Sweets · Luxury Crafted Desserts
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function Icon({ children }) {
  return (
    <div className="w-10 h-10 border border-[#e6c17a] flex items-center justify-center rounded-full hover:bg-[#e6c17a] hover:text-black transition cursor-pointer">
      {children}
    </div>
  );
}
