import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import contactBanner from "../assets/images/Hero-img/slide1.jpg";
export default function Contact() {
  return (
    <div className="w-full">

      {/* ===== TOP BANNER ===== */}
      <section
        className="relative h-[45vh] md:h-[60vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url(" + contactBanner + ")",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-2">Contacts</h1>
          <p className="text-sm tracking-wide">Get in touch with us</p>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-serif mb-4">Our Contacts</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Visit our store, call us, or send us a message anytime — 
          our team is always ready to serve you with the best taste and service.
        </p>
      </section>

      {/* ===== CONTACT GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Opening Hours */}
        <div>
          <h3 className="text-2xl font-serif mb-6">Opening Hours</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <strong>Monday – Friday:</strong> <br /> 08:00 – 17:30
            </li>
            <li>
              <strong>Saturday:</strong> <br /> 09:00 – 16:00
            </li>
            <li>
              <strong>Sunday:</strong> <br /> Closed
            </li>
          </ul>
        </div>

        {/* Send Message */}
        <div>
          <h3 className="text-2xl font-serif mb-6 text-center">
            Send Message
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full border px-4 py-3 outline-none focus:border-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full border px-4 py-3 outline-none focus:border-gray-500"
            />
            <textarea
              placeholder="Text Message"
              rows="5"
              className="w-full border px-4 py-3 outline-none focus:border-gray-500"
            ></textarea>

            <button
              type="submit"
              className="w-full border border-gray-800 py-3 font-semibold hover:bg-gray-800 hover:text-white transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-serif mb-6">Our Contacts</h3>
          <p className="text-gray-400 mb-4">
            785 Carriage Drive, <br />
            Jacksonville Beach, FL
          </p>
          <p className="text-gray-400 mb-2">+1 203-284-2818</p>
          <p className="text-gray-400 mb-2">+1 203-284-2919</p>
          <p className="text-gray-400">info@your-site.com</p>
          <p className="text-gray-400">sales@your-site.com</p>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="w-full h-[400px]">
         <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.633349745181!2d85.2799816!3d25.316519899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29787854a826f%3A0x3af9b6654d8d82d2!2sShree%20Hari%20Sweets!5e0!3m2!1sen!2sin!4v1768120345710!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Shree Hari Sweets Location"
  ></iframe>
      </section>

      {/* ===== FOOTER STYLE SECTION ===== */}
      <section
        className="relative bg-center bg-cover py-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1542826438-8b0c7e3c7f59)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-white items-center">

          {/* Follow Us */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 text-lg">
              <FaFacebookF />
              <FaPinterestP />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>

          {/* Logo */}
          <div className="text-center">
            <h2 className="text-3xl font-serif mb-2">Sri Hari Sweets</h2>
            <p className="tracking-wide text-sm">Sweet Bakery</p>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-serif mb-4">
              Get Our Sweet News
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 text-black outline-none"
              />
              <button className="bg-white text-black px-5">
                ➤
              </button>
            </div>
          </div>
        </div>

        <p className="relative text-center text-sm text-gray-300 mt-12">
          Powered By IQSofttech
        </p>
      </section>
    </div>
  );
}
