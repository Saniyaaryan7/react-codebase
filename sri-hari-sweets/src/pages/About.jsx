import Cake_bg from "../assets/images/About-img/about-bg.jpg";
import storycake from "../assets/images/Hero-img/slide1.jpg";
import ourMission from "../assets/images/About-img/ourMission.jpg";
import valuesCard from "../assets/images/About-img/valuesCard.avif";


export default function About() {
  return (
    <div className="w-full overflow-hidden">

      {/* ===== TOP BANNER ===== */}
      <section className="relative w-full h-[45vh] md:h-[45vh]">
        <img
          src="https://plus.unsplash.com/premium_photo-1664472607092-2f28b4b14b55?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Bakery Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mt-8">About Us</h1>
          <p className="mt-2 text-sm md:text-base font-serif font-medium">Sri Hari Sweets is a celebration of taste, tradition, and quality.</p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="relative py-20">
  {/* Background Image */}
  <img
    src={Cake_bg}
    alt="Cake Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-white/80"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    
    <div>
      <h2 className="text-4xl text-pink-700 font-bold mb-4">Our Story</h2>
      <p className="text-black leading-relaxed">
        Sri Hari Sweets was born from a simple dream — to spread happiness
        through handcrafted sweets and cakes. What started as a small home
        kitchen has now become a place where tradition meets creativity.
      </p>

      <p className="text-black mt-4 leading-relaxed">
        Every dessert is made with love, care, and a promise of purity that
        makes every celebration sweeter.
      </p>
    </div>

    <img
      src={storycake}
      alt="Our Cakes"
      className="rounded-xl shadow-lg"
    />
  </div>
</section>

      {/* ===== OUR MISSION ===== */}
      <section className="relative py-20">
        <img
          src={ourMission}
          alt="Baking Process"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-pink-500/80"></div>

        <div className="relative max-w-5xl mx-auto text-center px-6 text-white">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="leading-relaxed">
            Our mission is to craft fresh, delicious, and visually delightful
            sweets using the finest ingredients. We focus on quality, hygiene,
            and consistency while keeping authentic flavors alive for every
            generation.
          </p>
        </div>
      </section>

      {/* ======================== VALUES ========================= */}
     <section className="relative py-24">
  {/* Background Image */}
  <img
    src={Cake_bg}   
    alt="Our Bakery"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 text-center text-white space-y-16">

    {/* OUR BAKERY TEXT */}
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Our Bakery
      </h2>
      <p className="leading-relaxed text-gray-200">
        Inside our bakery, every cake is prepared with patience and precision.
        From mixing to baking and decorating, each step reflects our commitment
        to excellence and taste.
      </p>
    </div>

    {/* VALUES / CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {[
        {
          title: "Tradition",
          text: "Preserving authentic recipes passed through generations."
        },
        {
          title: "Quality",
          text: "Only premium ingredients with uncompromised freshness."
        },
        {
          title: "Creativity",
          text: "Modern designs blended with classic flavors."
        },
        {
          title: "Passion",
          text: "Baked with love, care, and dedication every single day."
        }
      ].map((item, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl bg-white/90 backdrop-blur text-pink-700 shadow-md hover:shadow-xl transition"
        >
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.text}</p>
        </div>
      ))}
    </div>

  </div>
</section>


    </div>
  );
}
